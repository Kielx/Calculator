let operations = {
    add : function(a,b){
        return a + b;
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
        num2+= text;
    }
    else{
        num1 += text ;
    }
    
    console.log(`num1 ${num1}`)
    console.log(`num2 ${num2}`)
}


let result;
let tempres;
let num1 = '';
let operator = '';
let num2 = '';
let func;

num = document.querySelectorAll('.num');
op = document.querySelectorAll('.op');
let active = false;

let operators = new Map();
operators.set('+', operations.add);
operators.set('-', operations.subtract);
operators.set('*', operations.multiply);
operators.set('/', operations.divide);


num.forEach(element => {
    element.addEventListener("click", () => addToNum(element.textContent))
})

op.forEach(element => {
        element.addEventListener("click", () => {
            active = true;
            operator = element.textContent
        }
        )
    }
)

calc = document.querySelector('.calc')
calc.addEventListener('click', () => {
    dupa = operators.get(operator)
    result = dupa(num1, num2)
    console.log(result)
}
)





