import Exe01 from "../components/Exercises/Exe01/Exe01.jsx";
import TitleComponent from "../components/Demos/TitleComponent/TitleComponent.jsx";
import ConditionalComponent from "../components/Demos/ConditionalComponent/ConditionalComponent.jsx";
import CollectionsComponent from "../components/Demos/CollectionsComponent/CollectionComponents.jsx";
import ExplanationComponent from "../components/Demos/ExplanationComponent/Explanation/ExplanationComponent.jsx";


function HomePage() {
    return(
        <div className={"component"}>
            <TitleComponent title={"Home"}/>

            <h2 className={"center"}>Welcome to the React initiation!</h2>
            <ExplanationComponent
                title={"Création d'un projet React"}
                text={"Pour créer un projet utiliser la commande:"}
                value={[
                    "npm create vite@latest",
                    "Sélectionner le type de projet: React",
                    "Sélectionner le langage: Javascript",
                    "Positionnez la console dans le projet : cd \"nomProjet\" ",
                    "npm install",
                    "npm run dev"
                ]}
            />

            {/*<TitleComponent className={"container"} title={"Exercice 1"}/>*/}
            {/*<Exe01 className={"container"}/>*/}
            {/*<Exe01 className={"container"} name ={"Jen"} age = {35}/>*/}

            {/*<ConditionalComponent className={"container"} param={"information"}/>*/}
            {/*<ConditionalComponent  className={"container"}/>*/}
            {/*<CollectionsComponent className={"container"} />*/}
        </div>
    )
}

export default HomePage