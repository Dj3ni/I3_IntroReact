import './DemoComponent.css'

function DemoComponent({title = "Mon info par défaut", value}) {
    return (
        <>
            {/*Balise sans paramètre*/}
            <h1>Hello</h1>

            {/*Balise avec paramètre*/}
            <h1>Hello {title} - {value}</h1>

            {/*Balise avec classe*/}
            <h1 className={"container"}> Hellooo</h1>
        </>
    )
}

export default DemoComponent;