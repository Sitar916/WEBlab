const output = document.querySelector('output');+

div.classList.add('keyboard');
document.querySelector('.calculatorComplex').appendChild(div);

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        calc(this.value)
    })
});