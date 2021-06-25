document.addEventListener('keydown', event => {
    calc(event.key)
});

function calc(value) {
    if (value.match(/=|Enter/)) {
        output.textContent = (math.evaluate(output.textContent)).toFixed(3);
}    
    else if (value === 'C') {
        output.textContent = ''
    } else if (value.match(/CE|Backspace/)) {
        output.textContent = output.textContent.substring(0, output.textContent.length - 1)
    } else {
        output.textContent += value
    }
}