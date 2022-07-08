import { fetchBookings } from "./dataAccess.js"
import { ClownsForHire } from "./ClownforHire.js"
import { fetchClowns } from "./dataAccess.js"






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