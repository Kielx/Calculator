let operations = {
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

    console.log(`num1 ${num1}`);
    console.log(`num2 ${num2}`);
    console.log(`operator ${operator}`);
};

num = document.querySelectorAll('.num');
op = document.querySelectorAll('.op');
calc = document.querySelector('.calc');
clr = document.querySelector('.clr');
dot = document.querySelector('#dot');
output = document.querySelector('#output');
sign = document.querySelector('#sign');

calc.disabled = true;
let result;
let num1 = '';
let operator = '';
let num2 = '';
let active = false;
let dotActive = false;
let operatorReady = false;

let operators = new Map();
operators.set('+', operations.add);
operators.set('-', operations.subtract);
operators.set('*', operations.multiply);
operators.set('/', operations.divide);


num.forEach(element => {
    element.addEventListener("click", () => addToNum(element.textContent));
});

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

calc.addEventListener('click', () => {
    operator2 = operators.get(operator);
    result = operator2(+num1, +num2);
    console.log(result);
    num1 = result;
    num2 = '';
    dotActive = false;
    output.textContent = result;
    calc.disabled = true;
        
}
);

clr.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    active = false;
    calc.disabled = true;
    console.log(num1);
    console.log(num2);
    console.log(operator);
    output.textContent = 0;
    dotActive = false;
}
);


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

