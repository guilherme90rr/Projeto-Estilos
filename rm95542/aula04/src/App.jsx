import React from 'react'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home'
import Menu from './components/menu/Menu'
import ModaFeminina from './components/modaFeminina/ModaFeminina'
import ModaMasculina from './components/modaMasculina/ModaMasculina'
import ModaInfantil from './components/modaInfantil/ModaInfantil'
import Sobre from './components/sobre/Sobre'

export default function App() {

    return (
        <>
        <Menu/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/modaMasculina" element={<ModaMasculina/>} />
                <Route path="/modaFeminina" element={<ModaFeminina/>} />
                <Route path="/modaInfantil" element={<ModaInfantil/>} />
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes> 
        </>
    )
}