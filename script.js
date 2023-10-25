let currentCalculation = [];
let result = "";

(function addEventListenersToButtons () {

    let buttons = document.querySelectorAll(".button");

    for (let i = 0; i < buttons.length; i++) {

        let button = buttons[i];

        if (button.textContent == "DEL") {
            button.addEventListener("click", (event) => {
                deleteButton();
                updateDisplay();
            })

        } else if (button.classList.contains("equalButton")) {

            button.addEventListener("click", (event) => {
                currentCalculation.push(result);
                //currentCalculation.push(button.textContent);
                result = "";
            })

        } else if (button.classList.contains("numberButton")){

            button.addEventListener("click", (event) => {
                result += button.textContent;
                updateDisplay();

            })

        } else if (button.classList.contains("operationButton") && !button.classList.contains("equalButton")) {

            button.addEventListener("click", (event) => {
                currentCalculation.push(result);
                currentCalculation.push(button.textContent);
                result = "";
                updateDisplay();

            })


        }
    }

})();

function updateDisplay() {
    document.querySelector(".result").textContent = result;
    document.querySelector(".currentCalculation").textContent = currentCalculation.join();
}

function deleteButton() {
    if (result.length > 0) {
        result = result.slice(0,result.length-1);
    } else if (currentCalculation.length > 0) {
        currentCalculation = currentCalculation.slice(0,currentCalculation.length-1);
    }
}
