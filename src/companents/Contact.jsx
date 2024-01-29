import { useState } from 'react'
import '../assets/css/contact.css'
const Contact = () => {
    const [data,setData] = useState({name:"",email:"",phone:"",message:""});
    const handleChance = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Thank you for contact with us")
    }
  return (
    <div>
      <form action="">
        <h1>Contact <span>Here</span></h1>
        <input type="text" name='name' onChange={handleChance} placeholder='Enter name'/>
        <input type="email" name='email' onChange={handleChance} placeholder='example@gmail.com' />
        <input type="phone" name='phone' onChange={handleChance} placeholder='Enter phnone number'/>
        <textarea name="message" id="" cols="30" rows="10" onChange={handleChance} placeholder='type here ...'/>
        <button onClick={handleSubmit} type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact
