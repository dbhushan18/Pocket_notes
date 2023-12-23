let counter = document.querySelector('#counter');
let count = parseInt(counter.innerHTML);

let incBtn = document.querySelector('#inc');
let decBtn = document.querySelector('#dec');

// function icr(){
//     ++count;
//     console.log(count);
// }

// function dec(){
//     count--;
//     console.log(count);
// }

incBtn.addEventListener('click',function(){
    ++count;
    counter.innerHTML=count;
});
decBtn.addEventListener('click',function(){
    --count;
    counter.innerHTML =count;
});
