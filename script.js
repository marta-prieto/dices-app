

function getRandom(max) {
                
    let result = Math.floor(Math.random() * (max-1+1)) + 1;
    let btn = document.querySelector(".random_button");
    btn.innerHTML = result;
}


function clickButton() {
    let button100 = document.querySelector(".button1");
    let button6 = document.querySelector(".button2");
    let button3 = document.querySelector(".button3");

    //array para recorrer los elementos 
    /*let arrayBtn = document.querySelectorAll(".button_dice");

    arrayBtn.forEach(button => {
        console.log("prueba", button)

        button.addEventListener("click", () => {
            console.log("prueba2")
        })
    });*/


    if (button100) {
        
        button100.addEventListener("click", () => {
            getRandom(100);
        });
    }
    
    if (button6) {
        button6.addEventListener("click", () => {
            getRandom(6);
        });
    }
    if (button3) {
        
        button3.addEventListener("click", () => {
            getRandom(3);
        });
    }

}

clickButton();

