import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Turner jr',
    review: 'Kuffa, zajebisty koles i jak jeszcze gra w karty i w golfa na piasku! Ma fajną zajafke i jest super!'
  },
  {
    avatar: AVTR2,
    name: 'Cristiano Ronaldo',
    review: 'He plays football so good that I cant believe it. OMG He scored so many goals, that my wife says she wants too marry him! Crazy! '
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Umusore mwiza! Ndibwira ko badafite programmes nkizo kuri Mars cyangwa no kumubumbe ushaje!'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Allah with you Tomek! You are a coding Mohammed!'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials