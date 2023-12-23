let string ="";
let buttons = document.querySelectorAll('.button');
let text = document.querySelector('input').value;

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{

    //     switch(e.target.innerHTML){
    //         case "RESET": 
    //             string = "";
    //             text = string;
    //             break;

    //         case "=":
    //             if(string.charAt(0) =="*" || string.charAt(0) =="/" || isNaN(string.charAt(string.length-1)) ){
    //                 string= "Invalid Input";
    //                 text = string;
    //                 break;
    //             } 
    
    //             else if(eval(string) == Math.floor(eval(string))){
    //                 let newstring = eval(string);
    //                 text = newstring;
    //                 break;
                    
    //             }
    //             else{
    //                 string = eval(string).toFixed(2);
    //                 text = string;
    //                 break;
    //             }   
                

    //         case "DEL" && "t":
    //             string = string.toString().slice(0,-1);
    //             text = string;
    //             break;
            
    //         default:
    //             if(isNaN(string.charAt(string.length-1)) && isNaN(e.target.innerHTML ) && isNaN(charAt(0)) ){
    //                 string.charAt(string.length-1)=e.target
    //                 text = string;
    //                 break;
    //             }
    //             else{
    //                 string = string + e.target.innerHTML;
    //                 text = string;    
    //                 break;
    //             }     
    //     }

    //      })
    // })




        if(e.target.innerHTML == 'RESET'){
            string = "";
            document.querySelector('input').value =string;
        }
        
       else if(e.target.innerHTML === 'undefined' || e.target.innerHTML== 'null'){
            string= "ERROR";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '='){
            if(string.charAt(0) =="*" || string.charAt(0) =="/" || isNaN(string.charAt(string.length-1)) ){
                string= "Invalid Input";
                document.querySelector('input').value = string;
            } 

            else if(eval(string) == Math.floor(eval(string))){
                let newstring = eval(string);
                document.querySelector('input').value = newstring;
            }
            else{
                string = eval(string).toFixed(2);
                document.querySelector('input').value = string;
            }  
        }
        
        else if(e.target.innerHTML == 'DEL' && string !="Invalid Input"){
            string = string.toString().slice(0,-1);
            document.querySelector('input').value = string;
        }       
        else{
            if(isNaN(string.charAt(string.length-1)) && isNaN(e.target.innerHTML ) && isNaN(charAt(0)) ){
                string.charAt(string.length-1)=e.target
                document.querySelector('input').value = string;

            }
            else{
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;    
            }
        }
        
    })
})
