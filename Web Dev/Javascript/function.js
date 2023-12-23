/*function abc(){

}

//function expression
let xyz = () =>{
}

*/

function outer(){
    function inner(){
        console.log("this is returned function")
    }
    return inner;
}

let result = outer();
result();