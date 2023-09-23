class Dices {

  constructor(type, selector){


  }
  getRandom(){
    let result = Math.floor(Math.random() * (max - 1 + 1)) + 1
    let btn = document.querySelector(".random_button")
    btn.innerHTML = result
  }
}

const dice = new Dices()
dice.getRandom()



