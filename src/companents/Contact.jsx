import '../assets/css/contact.css'
const Contact = () => {
  return (
    <div>
      <form action="">
        <h1>Contact <span>Here</span></h1>
        <input type="text" name='name' placeholder='Enter name'/>
        <input type="email" name='email' placeholder='example@gmail.com' />
        <input type="phone" name='phone' placeholder='Enter phnone number'/>
        <textarea name="message" id="" cols="30" rows="10" placeholder='type here ...'/>
        <button className='btn btn-outline-primary' type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact
