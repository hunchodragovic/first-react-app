import { useState } from 'react';

export default function MyButton() {
  const [name,setName] = useState("Ahmad")
function btnClicked (){
    if(name === "Ahmad"){
        setName("ilyes")
    }else{

        setName("Ahmad")

    }
   
}
  return (
    <div>
      <button onClick={btnClicked}>Click me</button>
      <h1>{name}</h1>
    </div>
  );
}