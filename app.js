let Output = document.querySelector("#Output");
let btns = document.querySelectorAll(".btn");

let string = "";

Array.from(btns).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML === "="){
            try {
                string = eval(string).toString();
                if (string === "Infinity") {
                    Output.value = "Can't divide by zero!"
                    string="";
                }else{
                    Output.value = string
                }
            } catch (error) {
                console.log(error)
            }
        }
        else if (e.target.innerHTML === "AC") {
            string = "";
            Output.value = string;
        }else if(e.target.innerHTML === "C"){
            // string = string.substring(0, string.length-1);
            string = string.slice(0,-1)
            Output.value = string;
        }
        else{
            string = string += e.target.innerHTML;
            Output.value = string;
        }
    })
})