import React from 'react'
import "./Sobre.css"
export default function Home() {

    const Sobre = {
        backgroundColor: '#778899',
        height: '85vh',
        textAlign: 'center',
        color: '#00000'
    }
  return (
    <div style={Sobre}>
      <div className='sobrecss' >
        <h1 className='sobre'>Sobre nós</h1>
        <p>Aluno: Guilherme de Jesus Ferreira</p>
        <p>RM: 95542</p>
      </div>
    </div>
   
  )
}
