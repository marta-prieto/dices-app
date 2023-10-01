import { getRandom } from './utils.js'

class Dices {
  constructor(button, output) {
    this.type = Number(button.getAttribute('data-type'))
    this.buttonId = button.id
    this.button = button
    this.output = output

    this.initButton()

  }

  showRoll(roll) {
    this.output.innerHTML = roll
    this.output.setAttribute("for", this.buttonId)
  }


  initButton() {
    this.button.addEventListener("click", () => {
      const myRoll = getRandom(this.type)
      this.showRoll(myRoll)
    })
  }
}

export {
  Dices
}