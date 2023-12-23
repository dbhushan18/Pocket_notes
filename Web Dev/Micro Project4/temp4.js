let string ="";
let buttons = document.querySelectorAll('.button');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML === undefined || e.target.innerHTML== null){
            string= "ERROR";
            document.querySelector('output').value = string;
        }
        else if(e.target.innerHTML == '='){ 
            if(string.includes("x"))  {
                string= string.replace("x","*")
            }
            string = eval(string).toFixed(2);
            document.querySelector('.output').value = string;
        }
        else if(e.target.innerHTML == 'RESET'){
            string = "";
            document.querySelector('.output').value =string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.toString().slice(0,-1);
            document.querySelector('.output').value = string;
        }       
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.output').value = string;
        }
        
    })
})
