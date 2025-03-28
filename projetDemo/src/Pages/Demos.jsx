import ConditionalComponent from "../components/Demos/ConditionalComponent/ConditionalComponent.jsx";
import CollectionsComponent from "../components/Demos/CollectionsComponent/CollectionComponents.jsx";
import TitleComponent from "../components/Demos/TitleComponent/TitleComponent.jsx";
import Explanations from "./Explanations.jsx";
import StateComponent from "../components/Demos/StateComponent/StateComponent.jsx";

function Demos() {
    return (
        <div className={"component"}>
            <TitleComponent className={"container component"} title={"Demos"} />
            <ConditionalComponent className={"container component"} param={"information"}/>
            <ConditionalComponent  className={"container component"}/>
            <CollectionsComponent className={"container component"} />
            <StateComponent/>
        </div>
    )
}

export default Demos