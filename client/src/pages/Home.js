import React, {useEffect, useState} from 'react'
import Home from '../pages/Home'
import Card from '../components/Card/Card'
import Nav from '../components/Nav/Nav'
import '../App.css'

function App() {
    
    //create state -- with a hook
    //initially created a useState holding an empty array useState([])
    //initially the state is an empty array, which is held in a state variable called products, and if you want to update it, you call setProducts
    //setProducts updates state
  //   [state variable, setter method that updates state for us]
    const [products, setProducts] = useState([])

    //make a call to the api to get some data 
    //two arguments to pass: (callback funciton, everytime this state changes run the callback first arg )
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [])
    
    
    
    return (
        <div className="App">
            <h1>Hello from the home page!</h1>
            <Nav/>
            <Card/>

        </div>
    )
}

export default App
