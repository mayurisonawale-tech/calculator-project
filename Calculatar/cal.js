let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons); //coverting all buttons into array
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") { //first target to equal button
            string = eval(string); //eval function evaluate the string
            input.value = string; //display the result in input box
        }
        else if (e.target.innerHTML == "AC") { //target to AC button
            string = "";  // after clicking AC string will be empty
            input.value = string; //display empty string in input box
        }
        else if (e.target.innerHTML == "DEL") { //target to DEL button
            string = string.slice(0, -1); //slice method remove last character from string
        }   
        else {
            string += e.target.innerHTML; // targerting all buttons
        }
        input.value = string;

    });
});
