


function clickButton() {
    const button100 = document.querySelector(".button1");
    const button6 = document.querySelector(".button2");
    const button3 = document.querySelector(".button3");

    if (button100) {
        
        button100.addEventListener("click", () => {
            console.log("click1");
            function getRandom100(max) {
                return Math.floor(Math.random() * max);
            }
            console.log(getRandom100(100));
        });
    }

    if (button6) {
        button6.addEventListener("click", () => {
            console.log("click2");
            function getRandom6(max) {
                return Math.floor(Math.random() * max);
            }
            console.log(getRandom6(6));
        });
    }
    if (button3) {
        
        button3.addEventListener("click", () => {
            console.log("click3");
            function getRandom3(max) {
                return Math.floor(Math.random() * max);
            }
            console.log(getRandom3(3));
        });
    }

}

clickButton();




