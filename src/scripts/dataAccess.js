// Next, create a function in the data access module that will POST a reservation state object to your API to be saved in permanent storage.

const applicationState = { bookings: [] }
const API = "http://localhost:8088"
const mainContainer = document.querySelector("container")

export const fetchBookings = () => {
    return fetch(`${API}/bookings`)
    .then ( response => response.json())
    .then( 
        (clientBookings) => {
            applicationState.bookings = clientBookings
        }
    )
}

export const getBookings = () => {
    return applicationState.bookings
}

export const sendBookings = (completedBookingForms) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"},
            body: JSON.stringify(completedBookingForms)
        }
        return fetch(`${API}/bookings`, fetchOptions)
        .then( response => response.json())
        .then(() => {
            mainContainer.dispatchEvent( new CustomEvent("stateChanged"))
        })
    }

    export const deleteBooking = (id) => {
        return fetch(`${API}/bookings/${id}`, { method: "DELETE" })
            .then(
                () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
    }
    
    export const fetchClowns = () => {
        return fetch(`${API}/clowns`)
            .then(response => response.json())
            .then(
                (data) => {
                    applicationState.clowns = data
                }
            )
    }
    
    export const getClowns = () => {
        return applicationState.clowns
    }
    
    export const saveCompletedBooking = (completedBookings) => {
        const fetchCompleted = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(completedBookings)
        }
    
    
        return fetch(`${API}/completions`, fetchCompleted)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
    }
    
    export const fetchCompletions = () => {
        return applicationState.completions 
    }