
document.addEventListener('DOMContentLoaded', () => {



    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    const title = document.getElementById('title');
    const box = document.getElementById('box');


    let actualOp = "";
    let displayRestart = false;

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = button.getAttribute('data-val');
            const elementbutton= e.currentTarget;

            let tl = gsap.timeline();
            tl.to(elementbutton,{scaleY: 0.8, scaleX: 1.2, duration: 0.05, ease: "power1.out"})
            tl.to(elementbutton, { scaleY: 1.1, scaleX: 0.9, duration: 0.1, ease: "power1.inOut" });
            tl.to(elementbutton, { scaleY: 1, scaleX: 1, duration: 0.4, ease: "elastic.out(1, 0.3)" });

            inputValue(value);
        });
    });

    gsap.from(buttons, {
        opacity: 0,
        duration: 0.3,
        ease: 'powerinOut',
        y: 30,
        stagger: 0.03,
        immediateRender: true
    })

    gsap.from(title, {
        opacity: 0,
        duration: 0.3,
        ease: 'powerinOut',
        y: 30,
        immediateRender: true
    })

    gsap.from(box, {
        opacity: 0,
        duration: 0.3,
        ease: 'powerinOut',
        y: 30,
        immediateRender:true
    })



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
            if(expresion === "69"){
    }
        
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

console.log(actualOp);
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
