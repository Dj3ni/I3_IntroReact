function  ConditionalComponent({param = "valeur"}) {
    if(!param) {
        return(
            <h4 className={"component"}>Coucou je suis conditional component</h4>
        )
    }
     else {
         return (
             <div className={"component"}>
             {(param === "information") ? <h4>Param a pour valeur "{param}"</h4> :<h4> "{param}" a une autre valeur que "information" </h4>}
             </div>
         )
    }
}

export default ConditionalComponent