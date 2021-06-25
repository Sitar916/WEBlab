const div = document.createElement('div');

const symbol_array = [
    {name: "sin", symbol: "sin"},
    {name: "cos", symbol: "cos"},
    {name: "tan", symbol: "tan"},
    {name: "ctg", symbol: "ctg"},
    {name: "C", symbol: "C"},
    {name: "CE", symbol: "CE"},
    {name: "(", symbol: "("},
    {name: ")", symbol: ")"},
    {name: "ln", symbol: "ln"},
    {name: "lg", symbol: "lg"},
    {name: "%", symbol: "%"},
    {name: "*", symbol: "*"},
    {name: "^2", symbol: "x^2"},
    {name: "sqrt", symbol: "&radic;x"},
    {name: "!", symbol: "x!"},
    {name: "/", symbol: "/"},
    {name: "^", symbol: "x^y"},
    {name: "+", symbol: "+"},
    {name: "-", symbol: "-"},
    {name: "0", symbol: "0"},
    {name: "1", symbol: "1"},
    {name: "2", symbol: "2"},
    {name: "3", symbol: "3"},
    {name: "4", symbol: "4"},
    {name: "5", symbol: "5"},
    {name: "6", symbol: "6"},
    {name: "7", symbol: "7"},
    {name: "8", symbol: "8"},
    {name: "9", symbol: "9"},
    {name: ".", symbol: "."},
    {name: "=", symbol: "="}
]

symbol_array.map(item => {
    div.insertAdjacentHTML('beforeend', `<button value="${item.name}">${item.symbol}</button>`)
});