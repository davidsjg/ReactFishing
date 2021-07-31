import React from 'react'
import Home from '../pages/Home'
import Card from '../components/Card/Card'
import Nav from '../components/Nav/Nav'
import '../App.css'

function App() {
    return (
        <div className="App">
            <h1>Hello from the home page!</h1>
            <Nav/>
            <Card/>

        </div>
    )
}

export default App
