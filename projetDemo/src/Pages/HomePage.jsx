import Exe01 from "../components/Exercises/Exe01/Exe01.jsx";
import TitleComponent from "../components/Demos/TitleComponent/TitleComponent.jsx";
import ConditionalComponent from "../components/Demos/ConditionalComponent/ConditionalComponent.jsx";
import CollectionsComponent from "../components/Demos/CollectionsComponent/CollectionComponents.jsx";
import './HomePage.css'

function HomePage() {
    return(
        <>
            <TitleComponent className={"container"} title={"Exercice 1"}/>
            <Exe01 className={"container"}/>
            <Exe01 className={"container"} name ={"Jen"} age = {35}/>

            <ConditionalComponent className={"container"} param={"information"}/>
            <ConditionalComponent  className={"container"}/>
            <CollectionsComponent className={"container"} />
        </>
    )
}

export default HomePage