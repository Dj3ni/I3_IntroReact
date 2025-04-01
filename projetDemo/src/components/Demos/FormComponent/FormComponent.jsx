
import {useState} from "react";
import TitleComponent from "../TitleComponent/TitleComponent.jsx";

function formComponent() {
    const [input, setInput] = useState("")
    const [input2, setInput2] = useState("")
    const [formValue, setFormValue] = useState({email:"email", password:"password"})
    const action = ()=>{ console.log(input + " " + input2)}
    const submit = (e) =>{
        e.preventDefault();
        console.log(formValue)
        console.log(formValue.email)
        console.log(formValue.password)
    }

    return (
        <div className={"component"}>
            <TitleComponent title={"Formulaire"} />
            <div>
                <br/>
                <label>Champ à remplir</label>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <p>Texte input : {input}</p>
            </div>
            <div>
                <br/>
                <label>Champ à remplir 2 </label>
                <input value={input2} onChange={(e) => setInput2(e.target.value)} />
                <p>Texte input : {input2}</p>
            </div>
            <div>
                <form onSubmit={submit}>
                    <div>
                        <label>email</label>
                        <input
                            type={"email"}
                            value={formValue.email}
                            onChange={(e) => {
                                setFormValue({...formValue, email : e.target.value})
                            }}
                        />
                    </div>
                    <div>
                        <label>pwd</label>
                        <input
                            type={"password"}
                            value={formValue.password}
                            onChange={(e) => {
                                setFormValue({...formValue,password : e.target.value})
                            }}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <p> {formValue.email}</p>
            </div>
        </div>
    )

}

export default formComponent