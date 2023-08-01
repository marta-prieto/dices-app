

function getRandom(max) {

    let result = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    let btn = document.querySelector(".random_button");
    btn.innerHTML = result;
}

function clickButton() {
    //array para recorrer los elementos 
    let arrayBtn = document.querySelectorAll(".button_dice");

    arrayBtn.forEach(btn => {
        btn.addEventListener("click", () => {
                getRandom(Number(btn.getAttribute("nr_max")));
                //console.log("cuál es el botón clicado", btn)
       
        });
    });

}

clickButton();

