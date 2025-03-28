import TitleComponent from "../components/Demos/TitleComponent/TitleComponent.jsx";
import ExplanationComponent from "../components/Demos/ExplanationComponent/Explanation/ExplanationComponent.jsx";

function Explanations(){
    return (
        <div className={"component"}>
            <TitleComponent  title={"Explanations"}/>
            <ExplanationComponent
            title={"Ceci est Component d'explication pour l'exemple"}
            text={"Ce component contient du texte"}
            value={[
                "item1",
                "item2",
                "item3",
                "item4"
            ]}
            />
            <ExplanationComponent
                title={"Les composants"}
                text={"Fonction retournant du jsx et permet d ediviser l'interface utilisateur en blocs réutilisables"}
                value={[
                    "function Nom(){",
                    "return <h1>Bienvenue sur React!</h1>",
                    "}"
                ]}
            />


        </div>
    )
}

export default Explanations;