let result = 0;
let powInput = "";

document.addEventListener('keydown', event => {
    calc(event.key)
});

function factorial(){
    let n = output.textContent;
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
};

function degrees(value){
    switch(value){
        case("sin"): return(parseFloat(Math.sin(eval(output.textContent)/180*Math.PI).toFixed(5).toString()));
        case("cos"): return(parseFloat(Math.cos(eval(output.textContent)/180*Math.PI).toFixed(5).toString()));
        case("tan"): return(parseFloat(Math.tan(eval(output.textContent)/180*Math.PI).toFixed(5).toString()));
        case("ctg"): return(parseFloat(1/Math.tan(eval(output.textContent)/180*Math.PI).toFixed(5).toString()));
    }
    return result;
};

function logAndSimpleFunctions(value){
    switch(value){
        case("ln"): return(Math.log(eval(output.textContent)).toFixed(5));
        case("lg"): return(Math.log10(eval(output.textContent)).toFixed(5));
        case("%"): return(eval(output.textContent)/100);
        case("sqrt"): return(Math.sqrt(eval(output.textContent)));
    }
};

function powAndFact(value){
    switch(value){
        case("!"): return(factorial());
        case("^2"): return(Math.pow(eval(output.textContent), 2));
        case("^"): return(output.textContent + "^");
    }
    return result;
}

function defineValue(value) {
    if (value === "1" || value === "2" || value === "3" || value === "4" || value === "5" ||
        value === "6" || value === "7" || value === "8" || value === "9" || value === "0" || 
        value === "+" || value === "-" || value === "/" || value === "*" || value === "." || 
        value === "(" || value === ")")
            output.textContent += value;
    
    if(value === "sin" || value === "cos" || value === "tan" || value === "ctg")
        output.textContent = degrees(value);
    
    if(value === "ln" || value === "lg" || value === "%" || value === "sqrt")
        output.textContent = logAndSimpleFunctions(value);
    
    if(value === "^2" || value === "^" || value === "!")
        output.textContent = powAndFact(value);
    
    if (value === 'C') 
        output.textContent = ''
    
    if (value.match(/CE|Backspace/)) 
        output.textContent = output.textContent.substring(0, output.textContent.length - 1)
    
    if(value.match(/=|Enter/)) {
        if(output.textContent.includes('^')){
            let input = output.textContent.split('^');
            let powNum = eval(input[1]);
            let numToPow= eval(input[0]);
            result = Math.pow(numToPow, powNum);
            output.textContent = result;
        } 
        output.textContent = eval(output.textContent);
    }
};

function calc(value) {
    defineValue(value);
};