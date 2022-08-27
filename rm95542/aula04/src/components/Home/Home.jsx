import React from 'react'
import "./Home.css"
export default function Home() {

    const Home = {
        backgroundColor: '#ffb',
        height: '85vh',
        textAlign: 'center',
        color: 'orange'
    }
  return (
    <div style={Home}>
      <div className='inicial'>
        <h1>Página principal</h1>
        <p>Exemplo da página principal do projeto</p>
      </div>
    </div>
  )
}
