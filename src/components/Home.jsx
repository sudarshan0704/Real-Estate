import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import './Componet.css'
import homepageimg from './homepageimage.png'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function ({a,b}) {
    // let nav=useNavigate()//store in object because its a class blueprint
        
    // const navigate=()=>
    // {
    //     nav('/spread')
        
    // }
  return (
    <div className='Homepage'>
<section>
<h3>where</h3>
<h3>dreams</h3>
<h3>meet</h3>
<h3>LUXURY</h3>
</section>
<h3 id='extra'>Luxury living Starts Here</h3>
<div className='images'>
  
  <img src={homepageimg} alt="" />
</div>
        {/* <h1>welcom {a}... {b}</h1>
        <h1>this is home page</h1>
        <Link to="/arrow">arrow</Link> <br />
        <Link to="/ternary">ternary</Link> <br />

        <Link to="/spread">spread</Link><br />
        <Link to="/array">array</Link><br />
<button onClick={navigate}>goto spread</button> */}
    </div>
  )
}
