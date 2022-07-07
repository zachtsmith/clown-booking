import { fetchBookings, fetchClowns } from "./dataAccess.js"
import { ClownsForHire } from "./ClownforHire.js"
// import { fetchPlumbers } from "./dataAccess.js"






const mainContainer = document.querySelector("#container")

const render = () => {
    fetchBookings()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = ClownsForHire()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)