import {useState} from "react";

function StateComponent() {
    const [value, setValue] = useState();
    const [boolvalue , setBoolValue] = useState(false);

    return (
        <div className={ boolvalue ? "green" :"red"}>
            <p>{value}</p>
            <button onClick={() =>{setValue("valeur à changer")}}>Click</button>
            <button onClick={() =>{setValue("valeur à changer différemment")}}>Click 2</button>
            <button onClick={() =>{setBoolValue(!boolvalue)}}>Change color</button>
        </div>
    )

}

export default StateComponent;