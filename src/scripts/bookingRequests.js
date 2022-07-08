import { getBookings } from "./dataAccess.js";
import { deleteBooking } from "./dataAccess.js"
import { getClowns } from "./dataAccess.js"
import { saveCompletedBooking } from "./dataAccess.js"
export const bookingRequests = () => {
    const bookings = getBookings()
    const clowns = getClowns()

    let html = `
        <ul>
            ${
                bookings.map(booking => { 
                    
                    return `
    <li>
        ${booking.childsName}
        <select class="clowns" id="clowns">
        <option value="">Choose</option>
        ${
            clowns.map(
                clown => {
                    return `<option value="${booking.id}--${clown.id}">${clown.name}</option>`
                }
            ).join("")
        }
    </select>
        
        <button class="booking__delete"
                id="booking--${booking.id}">
            Delete
        </button>
    </li>
    
` 
                }).join("")
            }
            
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("booking--")) {
        const [,bookingId] = click.target.id.split("--")
        deleteBooking(parseInt(bookingId))
    }
})

let date_created = Date
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [bookingId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { bookingId, clownId, date_created}
            saveCompletedBooking(completion)
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        } 
    } 
)