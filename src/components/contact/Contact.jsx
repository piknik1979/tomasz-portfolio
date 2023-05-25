import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
// import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iyyed0s', 'service_iyyed0s', form.current, 'user_NXy1BGT7rnYvW5nno')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tpikniczka@gmail.com</h5>
            <a href="mailto:tpikniczka@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
          </article>
          {/* <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Another Messenger</h4>
            <h5>findmeout</h5>
            <a href="https://google.pl" rel="noreferrer" target="_blank">Send a message</a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+447879343338</h5>
            <a href="https://api.whatsapp.com/send?phone=+4407879343338" rel="noreferrer" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact