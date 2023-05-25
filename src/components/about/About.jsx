import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Individual Learning</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Availability</h5>
              <small>Remote and/or Hybrid/Stationary in North East area</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <a href="#portfolio" ><h5>Projects</h5></a>
              <small>Please see projects below</small>
            </article>
          </div>

          <p>
            Having always enjoyed working with technology,
and specifically creativity within this, I have decided
to transition my career into the development sector.
I am now seeking an opportunity to progress my
existing skills and knowledge within a full stack
development role.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About