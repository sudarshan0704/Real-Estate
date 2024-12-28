import React from 'react'

export default function Arraymethod() {
    const a=[1,'array ele',3,4,5]
    const students=['suda','poo','rahul','kiran']
    const obj1={
        username:"suda",
        password:"qwe",
        lan:['emglish','hindi']

    }
    const obj2={
 username:"suda@gamil",
        password:"133",
        lan:['kannada','emglish','hindi']

    }
    const obj3={
        username:"harry",
               password:"@1122",
               lan:['kannada','emglish','hindi','telugu']
       
           }

    const arrrayobjects=[{...obj1},{...obj2},{...obj2}]
    console.log(arrrayobjects,11111)
        

    let ele=students.map((name)=><h1>{name}</h1>)
  return (
    <div>
        <hr />
      {/* <p></p>
        {a.map((i)=> <h1>{i+1}</h1>)} */}
        <h3>students in this college</h3>
        <table border={1}>
            <thead>
            <tr>
                <th>sl no</th>
                <th>name</th>
                <th>password</th>
                <th>lang</th>
            </tr></thead>
            <tbody>
            {arrrayobjects.map((item,index)=>{
                return (
                 <tr>
                 <td>{index}</td>
                 <td> {item.username}</td>
                 <td> {item.password}</td>
                 <td> {item.lan.map((i)=><li>{i}</li>)}</td>
             </tr>
            )
            })}</tbody>
           
        </table>
        {/* {students.map((name)=><li style={{listStyle:'none'}}>{(students.indexOf(name)+1)+ ") "+ name+ " *SDMC UJIRE"}</li>)} */}
        </div>
  )
}
