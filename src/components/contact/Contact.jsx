import React from 'react'
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

import './Contact.scss'

const Contact = () => {

  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_agcjtmi', 'template_7p2xfdm', form.current, '056Um8lrYdH8I_pgN')
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>galuza.maksim996@gmail.com</h5>
            <a href='mailto:galuza.maksim996@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegram className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>https://t.me/MaksimProgrammist</h5>
            <a href='https://t.me/MaksimProgrammist' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact