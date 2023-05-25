import React from 'react'
import './footer.css'
// import {FaFacebookF} from 'react-icons/fa'
// import {FiInstagram} from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer__logo'>EGATOR</a> */}

      <ul className='permalinks'>
        {/* <li><a href="#">Home</a></li> */}
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        {/* <a href="https://facebook.com"><FaFacebookF/></a> */}
        <a href="https://www.linkedin.com/in/tomasz-pikniczka-439b7151/"><BsLinkedin/></a>
        <a href="https://github.com/piknik1979" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
      </div>

      {/* <div className="footer__copyright">
        <small>&copy; Tomasz Pikniczka</small>
      </div> */}
    </footer>
  )
}

export default Footer