import {useState} from "react";
import Exercises from "../../../Pages/Exercises.jsx";

function Calculator() {
    const [nb1, setNb1] = useState(0);
    const [nb2, setNb2] = useState(0);
    const [operation, setOperation] = useState()
    const [result, setResult] = useState(0)

    const operations = [
        "+", "-", "*","/"
    ];

    function calculate(nb1,operation,nb2){
        switch(operation){
            case "+":
                setResult(nb1+nb2)
                break;
            case "-":
                setResult(nb1-nb2)
                break;
            case "*":
                setResult(nb1*nb2)
                break;
            case "/":
                setResult(nb1/nb2)
                break;
        }
    }

    return(
        <div>
            <form action="" onSubmit={calculate}>
                <label htmlFor="nb1">Nb1</label>
                <input id = "nb1" type="number" min={0} onChange={ (e) =>{setNb1(e.target.value)}}/>
                <label htmlFor="operation">Operation</label>
                <select name="" id="operation">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <label htmlFor="nb2">Nb2</label>
                <input  id = "nb2" type="number"/>
                <button type={"submit"}> = </button>
                <input type="number" readOnly={true} value = {result}/>
            </form>

        </div>
    )
}

export default Calculator;