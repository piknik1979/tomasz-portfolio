import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Small Todo App in React Js',
    github: 'https://github.com/piknik1979/todo-app.git',
    demo: 'https://react-tomasz-todo-app.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Calculator done with React Js',
    github: 'https://github.com/piknik1979/react-calc.git',
    demo: 'https://tomasz-react-calc-app.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Wordle game clone application produced with collegues with Northcoders',
    github: 'https://github.com/maximal-games/maximal-murdle',
    demo: 'https://play.google.com/store/apps/details?id=com.maximal.maximalMurdle&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1'
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Maintaining tasks and tracking progress',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel ="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio