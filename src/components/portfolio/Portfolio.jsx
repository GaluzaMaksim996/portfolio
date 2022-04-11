import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

import './Portfolio.scss'

const data = [
  {
    id: 1,
    img: IMG1,
    title: 'React Sneakers',
    github: 'https://github.com/GaluzaMaksim996/react-sneakers',
    demo: 'https://galuzamaksim996.github.io/react-sneakers',
  },
  {
    id: 2,
    img: IMG2,
    title: 'Verstka Marcho Shop(HTML/SCSS/JQUERY/GULP)',
    github: 'https://github.com/GaluzaMaksim996/verstka-marcho-shop',
    demo: 'https://galuzamaksim996.github.io/verstka-marcho-shop',
  },
  {
    id: 3,
    img: IMG3,
    title: 'React Star Wars',
    github: 'https://github.com/GaluzaMaksim996/star-wars',
    demo: 'https://galuzamaksim996.github.io/star-wars',
  },
  {
    id: 4,
    img: IMG4,
    title: 'React Todo',
    github: 'https://github.com/GaluzaMaksim996/react-todo',
    demo: 'https://galuzamaksim996.github.io/react-todo',
  },
  {
    id: 5,
    img: IMG5,
    title: 'Verstka Marketing',
    github: 'https://github.com/GaluzaMaksim996/verstka-marketing',
    demo: 'https://galuzamaksim996.github.io/verstka-marketing',
  },
  {
    id: 6,
    img: IMG6,
    title: 'Verstka Wawe',
    github: 'https://github.com/GaluzaMaksim996/verstka-wawe',
    demo: 'https://galuzamaksim996.github.io/verstka-wawe',
  },
  {
    id: 7,
    img: IMG1,
    title: 'Verstka Seafood',
    github: 'https://github.com/GaluzaMaksim996/verstka-seafood',
    demo: 'https://galuzamaksim996.github.io/verstka-seafood',
  },
  {
    id: 8,
    img: IMG2,
    title: 'Verstka Safari',
    github: 'https://github.com/GaluzaMaksim996/verstka-safari',
    demo: 'https://galuzamaksim996.github.io/verstka-safari',
  },
  {
    id: 9,
    img: IMG3,
    title: 'Verstka BisLite',
    github: 'https://github.com/GaluzaMaksim996/verstka-beslite',
    demo: 'https://galuzamaksim996.github.io/verstka-beslite',
  },
  {
    id: 10,
    img: IMG4,
    title: 'Game Aim Training(JS)',
    github: 'https://github.com/GaluzaMaksim996/game-aim-training',
    demo: 'https://galuzamaksim996.github.io/game-aim-training',
  },
  {
    id: 11,
    img: IMG5,
    title: 'Magical Board(JS)',
    github: 'https://github.com/GaluzaMaksim996/magical-board',
    demo: 'https://galuzamaksim996.github.io/magical-board',
  },
  {
    id: 12,
    img: IMG6,
    title: 'Guitar Shop(JS)',
    github: 'https://github.com/GaluzaMaksim996/guitar-shop',
    demo: 'https://galuzamaksim996.github.io/guitar-shop',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, img, title, github, demo }) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className="portfolio__item-image">
                  <img src={img} all={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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