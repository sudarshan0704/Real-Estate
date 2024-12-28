import React from 'react'

export default function Spread() {
     let a=[1,2,3,4]
     let b=[4,5,6,7 ,'a','b']
     let c=[...a,...b]
   let [c1,c2,...c3]=b
   const objects=
   {
       user:"sudarshan",
       add:"somwarpet",
       age:20,


   }
   const objects1=
   {
       use:"vaishu",
       addre:"kundapura",
       ages:30,


   }
   const obj3={...objects,...objects1}
   console.log(obj3)

  return (
    <div>
        <hr />Spread
  <h1>array a :{a}</h1>
<br />
<h1>array b :{b}</h1>
<br>
</br>

<h1>combined array:{c}</h1>
<h4>use spread in between of Destructuring</h4>
<h2>{c1}</h2>
<h2>{c2}</h2>
<h2>{c3}</h2>
<h3>tested on objects</h3>
<h4></h4>
    </div>
  )
}
