import { useState } from 'react'
import './contactForm.css'

const ContactForm = ({ toggleVisibility, setFirstName, setLastName, setEmail, confirmOrder }) => {
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')
    let firstName = ""
    let lastName = ""
    let email = ""

    const handleContactForm = (e) => {
        e.preventDefault()
        setFirstName(firstName)
        setLastName(lastName)
        setEmail(email)
       

        const objContact = {
            phone,
            address,
            comment
        }
       
    }

    return (
        <div className='ContactContainer'>
          <div>Nombre</div>
          <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>Nombre:
              <input
                className='InputContact'
                type='text'
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
            </label>
            <label className='LabelContact'>Apellido:
              <input
                className='InputContact'
                type='text'
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
              />
            </label>
            <label className='LabelContact'>Email: 
              <input
                className='InputContact'
                type='text'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </label>
            <button onClick={() => confirmOrder()} className="Button">
              Confirmar Compra
            </button>
          
          </form>
        </div>
      )
}

export default ContactForm