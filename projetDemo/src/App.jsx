
import './App.css'
import HomePage from "./Pages/HomePage.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/NavComponent/Navbar.jsx";
import Exercises from "./Pages/Exercises.jsx";
import Demos from "./Pages/Demos.jsx";
import Explanations from "./Pages/Explanations.jsx";


function App() {


  return (
    <div className={"component"}>
        {/*Avec routing*/}
        <Router>
            <Navbar/>
            <Routes>
                <Route  path="/" element={<HomePage/>} />
                <Route  path="/demos" element={<Demos/>} />
                <Route  path="/exercises" element={<Exercises/>} />
                <Route  path="/explanations" element={<Explanations/>} />

            </Routes>
        </Router>


        {/*Sans routing, import direct ici:*/}
            {/*<NavComponent/>*/}
            {/*<HomePage/>*/}

    {/*<DemoComponent title={"Chaussettes"} value ={3}/>*/}
    {/*  <Exe01 name ={"Jen"} age = {35}/>*/}
    </div>
  )
}

export default App
