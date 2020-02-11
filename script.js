const operations = {
    add : function(a,b){
        return a+b;      
    },

    subtract : function(a,b){
        return a-b;
    },
    
    multiply : function(a,b){
        return a * b;
    },
    
    divide : function(a,b){
        return a/b;
    },
};

//Main calculate function
const addToNum = function(text){
    if (active){
        calc.disabled = false;
        num2+= text;
        output.textContent = num2;
    }
    else{
        num1 += text ;
        calc.disabled = true;
        output.textContent = num1;
    }
};

//Initial setup

let result;
let num1 = '';
let operator = '';
let num2 = '';
let active = false;
let dotActive = false;
let operators = new Map();
output = document.querySelector('#output');
sign = document.querySelector('#sign');


//Create map of operations
operators.set('+', operations.add);
operators.set('-', operations.subtract);
operators.set('*', operations.multiply);
operators.set('/', operations.divide);



num = document.querySelectorAll('.num');
num.forEach(element => {
    element.addEventListener("click", () => addToNum(element.textContent));
});

op = document.querySelectorAll('.op');
op.forEach(element => {
        element.addEventListener("click", () => {
            active = true;
            operator = element.textContent;
            if(num1 && num2 && operator){
                calc.disabled = false;
            }
            
            
            if (/[+\-/*]$/i.test(output.textContent) ){
                output.textContent = output.textContent.replace(/[+\-/*]$/i, operator);
            }
            else{
                output.textContent += operator;
            }
            sign.textContent = operator;
            
        }
        );
    }
);

calc = document.querySelector('.calc');
calc.disabled = true;
calc.addEventListener('click', () => {
    operator2 = operators.get(operator);
    result = operator2(+num1, +num2);
    num1 = result;
    num2 = '';
    dotActive = false;
    output.textContent = result;
    calc.disabled = true;
        
}
);

clr = document.querySelector('.clr');
clr.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    active = false;
    calc.disabled = true;
    output.textContent = 0;
    dotActive = false;
}
);

dot = document.querySelector('#dot');
dot.addEventListener('click', () => 
{   
    if (dotActive){
        return;
    }
    else{
        addToNum('.');
        dotActive = true;
    }
}
);

document.addEventListener('keydown', event => {
    but = document.querySelector(`button[data-key="${event.keyCode}"]`)
    if (but){
        but.click();
    }
    
})