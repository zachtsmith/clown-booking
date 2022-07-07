import { bookingRequests } from "./bookingRequests.js"
import { BookingForm } from "./clientBookingForm.js"


export const ClownsForHire = () => {
    return `
        <h1>Buttons and Lollipop Clown Services</h1>
        <section class="bookingForm">
            ${BookingForm()}
        </section>

        <section class="bookingRequests">
            <h2>Booking Requests</h2>
            ${bookingRequests()}
        </section>
    `
}