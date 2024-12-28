import React from 'react'

export default function Destructuring() {
    const a=['tata','jio','hundai','mahindra','toyato']
    let ele=a[2]
    let [c1,]=a
    const objects=
    {
        user:"sudarshan",
        add:"somwarpet",
        age:20,


    }
    let { user,add}=objects//it should be same name as key name differenec is u should use {} than[] like in array destructing
  return (
    <div>
        <hr style={{height:'10',background:'red'}}/>
            <h1>Destructuring</h1>

        <p>{ele} //old method</p>
        <li>new method</li>
        <p>{c1}</p>

<h2>object key:value pair</h2>
        {objects.user}
        <br></br>
        {objects.age}
        <br></br>
        {add}
    </div>
  )
}
