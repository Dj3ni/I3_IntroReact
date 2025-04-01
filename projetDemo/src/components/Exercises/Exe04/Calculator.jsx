import {useState} from "react";
import Exercises from "../../../Pages/Exercises.jsx";

function Calculator() {
    const [nb1, setNb1] = useState(0);
    const [nb2, setNb2] = useState(0);
    const [operation, setOperation] = useState("+")
    const [result, setResult] = useState(0)

    const operations = [
        "+", "-", "*","/"
    ];

function handleSubmit(e) {
    e.preventDefault();
    calculate(nb1, operation, nb2);
    console.log(result);
}

    function calculate(nb1,operation,nb2){
        switch(operation){
            case "+":
                setResult(parseInt(nb1)+parseInt(nb2))
                break;
            case "-":
                setResult(parseInt(nb1)-parseInt(nb2))
                break;
            case "*":
                setResult(parseInt(nb1)*parseInt(nb2))
                break;
            case "/":
                setResult(parseInt(nb1)/parseInt(nb2))
                break;
        }
    }


    return(
        <div>
            <form action=""
                  onSubmit={(e) => {handleSubmit(e)}}>
                <label htmlFor="nb1">Nb1</label>
                <input id = "nb1" type="number" min={0} onChange={ (e) =>{setNb1(e.target.value)}}/>
                <label htmlFor="operation">Operation</label>
                <select name="operation" id="operation" onChange={ (e) =>{setOperation(e.target.value)}}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <label htmlFor="nb2">Nb2</label>
                <input  id = "nb2" type="number" onChange={ (e) =>{setNb2(e.target.value)}}/>
                <button type={"submit"}> = </button>
                <input type="number" readOnly={true} value = {result}/>
            </form>

        </div>
    )
}

export default Calculator;