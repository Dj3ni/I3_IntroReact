function  ConditionalComponent({param = "valeur"}) {
    if(!param) {
        return(
            <h4>Coucou je suis conditional component</h4>
        )
    }
     else {
         return (
             <>
             {(param === "information") ? <h4>Param a pour valeur "{param}"</h4> :<h4> "{param}" a une autre valeur que "information" </h4>}
             </>
         )
    }
}

export default ConditionalComponent