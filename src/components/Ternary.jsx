import React from 'react'
import { Link } from 'react-router-dom'
export default function Ternary() {
    const a=10
    const name="suda"
    let mode=false
  return (
    <div>
        <hr>
        </hr>
        <Link to="/">home</Link> <br />
    Ternary
    <h1 style={mode?{backgroundColor:'red',color:'black'}:{backgroundColor:'black',color:'white'}}>{
       name=="suda"?<h1>true statement name is {name}</h1>:<h2>False statement name is not {name}</h2> 
    }
    </h1>

    </div>
  )
}
