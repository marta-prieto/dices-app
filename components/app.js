import { getRandom } from "./class.js"

function clickButton() {
    const arrayBtn = document.querySelectorAll(".button_dice")
    arrayBtn.forEach(btn => {
        btn.addEventListener("click", () => {
                getRandom(Number(btn.getAttribute("nr_max")))
        })
    })
}
clickButton()
