import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";





document.addEventListener('DOMContentLoaded', () => {

    useGSAP(() => {
    gsap.from("button", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        stagger: {
            each : 0.05,
            from: "random"
        },
        

    })
    });




    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    let actualOp = "";
    let displayRestart = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-val');
            inputValue(value);
        });
    });

function inputValue(value) {

    if (value === "c" || value === "C" || value === "clear") {
        actualOp = "";
        display.textContent = 0;
        displayRestart = false;
        return;
    } 
    

    if (value === "=" || value === "equal") {
        try {
            let expresion = actualOp.replace(/x/g, "*").replace(/,/g, ".");
            if (expresion === "") return;

            let res = new Function("return " + expresion)();
        
            actualOp = String(res);
            display.textContent = actualOp;
            displayRestart = true; 
        } catch (error) {
            display.textContent = "Error";
            actualOp = "";
            displayRestart = true;
        }
        return; 
    }


    if (displayRestart) {
        actualOp = "";
        displayRestart = false;
    }

    if (actualOp === "" && value !== "." && !isNaN(value)) {
        actualOp = value;
    } else {
        actualOp += value;
    }
    display.textContent = actualOp;
}
});