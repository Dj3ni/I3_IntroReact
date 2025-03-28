function ExplanationComponent({title, text,value}){
    const listValue = value.map((item, index) =>{
        return (
            <pre key={index}>
            <code>{item}</code>
        </pre>
        )
    })

    return (
        <div className={"component container"}>
            <h3 className={"title"}>{title}</h3>
            <p className={"text"}>{text}</p>
            <div className={"item"}>
                {listValue}
            </div>

        </div>
    )
}

export default ExplanationComponent;