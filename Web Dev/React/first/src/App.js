// import Hello from './Hello.js';

import React from "react";

// function App() {
//   return (
//     <>
//     <Hello/>
//     <h1>Hello World</h1>
//     </>
//   );
// }

// function car(){
//   return(
//     <>
//     <h1>This is black car</h1>
//     <App/>
//     </>
//   );
// }

function Profession(props){
  const show= ()=>{
    alert(props.prof)
  }

  return(
    <button onClick={show}>Click me</button>
  );
}

function Pass(){
  return(   
    <>
      <Profession prof='Teacher'/>
    </>
  );
}

export default Pass;