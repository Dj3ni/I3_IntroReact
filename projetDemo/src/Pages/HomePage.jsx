import Exe01 from "../components/Exercises/Exe01/Exe01.jsx";
import TitleComponent from "../components/Demos/TitleComponent/TitleComponent.jsx";
import ConditionalComponent from "../components/Demos/ConditionalComponent/ConditionalComponent.jsx";
import CollectionsComponent from "../components/Demos/CollectionsComponent/CollectionComponents.jsx";


function HomePage() {
    return(
        <>
            <TitleComponent title={"Exercice 1"}/>
            <Exe01/>
            <Exe01 name ={"Jen"} age = {35}/>

            <ConditionalComponent param={"information"}/>
            <ConditionalComponent />
            <CollectionsComponent />
        </>
    )
}

export default HomePage