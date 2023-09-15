import { getRandom } from "./class.js"

function clickButton() {
    const arrayBtn = document.querySelectorAll(".button_dice")

    console.error("arra", arrayBtn)
    arrayBtn.forEach(btn => {
        btn.addEventListener("click", () => {
                getRandom(Number(btn.getAttribute("nr_max")))
        })
    })
}
clickButton()
