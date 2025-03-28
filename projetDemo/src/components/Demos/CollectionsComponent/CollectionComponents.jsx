import './CollectionsComponent.css'

function CollectionsComponent() {
    const names = ["Jessica", "Mélusine", "Jenny", "Charifa"]

    const listItems = names.map((name, index) => {
        return(<li key={index}>{name}</li>)
    })

    return (
        <ul className={"component"}>{listItems}</ul>
    )
}

export default CollectionsComponent