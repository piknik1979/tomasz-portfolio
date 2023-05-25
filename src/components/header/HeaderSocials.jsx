import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
// import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
  
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tomasz-pikniczka-439b7151/" rel="noopener noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/piknik1979" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
        {/* <a href="https://dribbble.com" rel="noopener noreferrer" target="_blank"><FiDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials