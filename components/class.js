class Dices {
  getRandom(){
    let result = Math.floor(Math.random() * (max - 1 + 1)) + 1
    let btn = document.querySelector(".random_button")
    btn.innerHTML = result;
    console.log("prueba")
  }
}

const dice = new Dices()
dice.getRandom()



