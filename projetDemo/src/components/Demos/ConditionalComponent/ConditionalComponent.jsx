function  ConditionalComponent({param = "valeur"}) {
    if(!param) {
        return(
            <h1>Coucou je suis conditional component</h1>
        )
    }
     else {
         return (
             <>
             {(param === "information") ? <h1>Param a pour valeur "{param}"</h1> :<h1> "{param}" a une autre valeur que "information" </h1>}
             </>
         )
    }
}

export default ConditionalComponent