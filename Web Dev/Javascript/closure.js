function outer(){
    let out=10;
    function inner(){
        console.log(out);
    }
    return inner;
}
let res = outer();
res();
