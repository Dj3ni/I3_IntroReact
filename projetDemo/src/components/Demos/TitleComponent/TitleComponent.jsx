import "./TitleComponent.css"

function TitleComponent({title = "Titre inconnu"}) {
    return (
        <div className={"container-title"}>
            <h1>{title}</h1>
        </div>
    )
}

export default TitleComponent