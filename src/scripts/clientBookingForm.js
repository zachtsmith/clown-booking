import { sendBookings } from "./dataAccess.js"
export const BookingForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label> 
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberOfKids">Total number of Kids</label>
            <input type="number" name="numberOfKids" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventAddress">Address of Event</label>
            <input type="text" name="eventAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="dateOfReservation">Date</label> 
            <input type="date" name="dateOfReservation" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfReservation">How long is the event? (in hours)</label> 
            <input type="number" name="lengthOfReservation" class="input" />
        </div>

        <button class="button" id="submitBookingRequest">Submit Booking Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitBookingRequest") {
        // Get what the user typed into the form fields
        const clientName = document.querySelector("input[name='parentName']").value
        const kidsName = document.querySelector("input[name='childName']").value
        const totalKidCount = document.querySelector("input[name='numberOfKids']").value
        const addressOfEvent = document.querySelector("input[name='eventAddress']").value
        const dateOfEvent = document.querySelector("input[name='dateOfReservation']").value
        const lengthOfEvent = document.querySelector("input[name='lengthOfReservation']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            nameOfParent: clientName,
            childsName: kidsName,
            amountOfKids:  parseInt(totalKidCount),
            eventAddress: addressOfEvent,
            eventDate: dateOfEvent,
            durationOfEvent: parseInt(lengthOfEvent)
        }

        // Send the data to the API for permanent storage
        sendBookings(dataToSendToAPI)
    }
})
