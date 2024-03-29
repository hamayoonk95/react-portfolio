import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF} from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si";

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    // client.create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
  }

  return (
    <>
      <h2 className="head-text">Contact Me</h2>
    
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hamayoonk38@gmail.com" className="p-text">Hamayoonk38@gmail.com</a>
        </div>
      </div>
      <div className='app__socials'>
        <div>
            <FaGithub onClick={() => window.open("https://github.com/hamayoonk95")} />
        </div>
        <div>
            <FaFacebookF  onClick={() => window.open("https://www.facebook.com/profile.php?id=100071468872956")} />
        </div>
        <div>
            <SiLinkedin onClick={() => window.open("https://www.linkedin.com/in/hamayoon-khan-17166a184/")}/>
        </div>
    </div>
      

    {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea 
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      : <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
      </div>}

    </>
  )
}

export default AppWrap(Footer, 'contact')