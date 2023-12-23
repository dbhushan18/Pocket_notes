let input = document.querySelector('#inputarea');
let summary = document.querySelector('#summary');

function write(e){
    summary.innerHTML= e.key;
}

input.addEventListener('keypress',write);