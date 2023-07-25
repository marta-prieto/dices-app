
//pendiente añadir resultado entre 1 y máximo (100,6 ó 3)
//actualmente está añadido cómo máximo 101 por ejemplo, 
//pero esa no es la lógica, debe salir aleatoriamente entre dos números y está pendiente

function clickButton() {
    const button100 = document.querySelector(".button1");
    const button6 = document.querySelector(".button2");
    const button3 = document.querySelector(".button3");

    if (button100) {
        
        button100.addEventListener("click", () => {
            function getRandom100(max) {
                var result100 = Math.floor(Math.random() * max);
                var btn100 = document.querySelector(".random_button");
                btn100.innerHTML = result100;
            }
            getRandom100(101);
        });
    }
    

    if (button6) {
        button6.addEventListener("click", () => {
            console.log("click2");
            function getRandom6(max) {
                
                var result = Math.floor(Math.random() * max);
                var btn = document.querySelector(".random_button");
                btn.innerHTML = result;
           
            }
          
            getRandom6(7);
        });
    }
    if (button3) {
        
        button3.addEventListener("click", () => {
            console.log("click3");
            function getRandom3(max) {
                var result3 = Math.floor(Math.random() * max);
                var btn3 = document.querySelector(".random_button");
                btn3.innerHTML = result3;
            }
            getRandom3(4);
        });
    }

}

clickButton();
