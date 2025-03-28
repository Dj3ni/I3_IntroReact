import {useState} from "react";

function Counter (){

    const [count, setCount] = useState(0);


    return(
        <div>
            <p>Valeur du compteur : {count}</p>
            <button onClick={()=>{setCount(count+1)}}> + </button>
            <button onClick={()=>{setCount(0)}}>Set to 0</button>
        </div>
    )
}

export default Counter;