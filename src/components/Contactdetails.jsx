import React from 'react'
import Navigationbar from './Navigationbar'
export default function Contact() {
  return (
    <div>
      
        <div className='contact'>
        <div class="image"></div>
                <form action="">
                <label for="name">Enter Your Name</label>
                    <input type="text" placeholder='YOUR NAME' />
                    <label for="location" id="map">Contact number</label>
                     <input type="text" name="" id="maptext" placeholder='PHONE NUMBER'/>
                     <label for="textarea" id="textarea">Enter your Requirements</label>
                        <br></br>
                        <textarea name="" id="" rows="10" cols="30" placeholder='MAX 250 WORDS'></textarea>
                        <br></br>

                </form>
                <input type="submit" value="Contact"/>
        </div>
    </div>
  )
}
