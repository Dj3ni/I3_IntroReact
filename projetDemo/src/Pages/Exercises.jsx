
import Exe01 from "../components/Exercises/Exe01/Exe01.jsx";
import TitleComponent from "../components/Demos/TitleComponent/TitleComponent.jsx";
import '../index.css'
import ProductList from "../components/Exercises/Exe02/ProductList.jsx";
import Counter from "../components/Exercises/Exe03/Count.jsx";
import Calculator from "../components/Exercises/Exe04/Calculator.jsx";

function Exercises(){
    return (
        <div className={"component"}>
            <TitleComponent title={"Exercice 1"}/>
            <Exe01 />
            <Exe01 name ={"Jen"} age = {35}/>
            <TitleComponent title={"Exercice 2"}/>
            <ProductList/>
            <TitleComponent title={"Exercice 3"}/>
            <Counter/>
            <TitleComponent title={"Exercice 4"}/>
            <Calculator/>

        </div>
    )
}

export default Exercises