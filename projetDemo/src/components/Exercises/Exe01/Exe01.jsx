import './Exe01.css'

function Exe01({ name = "Votre nom", age = 18}) {
    return (
        <>
            <p className={"welcome"}>Bienvenue {name} sur l'application React</p>
            <p className={"paragraph"}>Vous avez {age} ans!</p>

        </>
    )
}
export default Exe01;