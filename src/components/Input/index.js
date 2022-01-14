import React from 'react'
import {useState} from "react"


function Input({onSubmit}) {
    const [drink, setDrink] = useState ("")
    function getValue(e) {
        setDrink (e.target.value)
        console.log(drink)
    }
    return (
        <form>
        <input onChange={getValue} placeholder='Enter drink here'
        />
        <button onClick={()=>{onSubmit(drink)}}>Search</button>
        </form>
    )
}

export default Input
