const div = document.createElement('div');

'C CE / * 7 8 9 - 5 6 4 + 1 2 3 0 ( ) ='.split(' ').map(symbol => {
    div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
});