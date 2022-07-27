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
    title: 'Pizza Shop(React-Redux)',
    github: 'https://github.com/GaluzaMaksim996/react-redux-pizza-shop',
    demo: 'https://react-redux-pizza-shop.herokuapp.com',
  },
  {
    id: 2,
    img: IMG2,
    title: 'Sneakers(React)',
    github: 'https://github.com/GaluzaMaksim996/react-sneakers',
    demo: 'https://galuzamaksim996.github.io/react-sneakers',
  },
  {
    id: 3,
    img: IMG3,
    title: 'Markup Marcho Shop(HTML/SCSS/JQUERY/GULP)',
    github: 'https://github.com/GaluzaMaksim996/verstka-marcho-shop',
    demo: 'https://galuzamaksim996.github.io/verstka-marcho-shop',
  },
  {
    id: 4,
    img: IMG4,
    title: 'React Star Wars',
    github: 'https://github.com/GaluzaMaksim996/star-wars',
    demo: 'https://galuzamaksim996.github.io/star-wars',
  },
  {
    id: 5,
    img: IMG5,
    title: 'React Todo',
    github: 'https://github.com/GaluzaMaksim996/react-todo',
    demo: 'https://galuzamaksim996.github.io/react-todo',
  },
  {
    id: 6,
    img: IMG6,
    title: 'Markup Marketing',
    github: 'https://github.com/GaluzaMaksim996/verstka-marketing',
    demo: 'https://galuzamaksim996.github.io/verstka-marketing',
  },
  {
    id: 7,
    img: IMG1,
    title: 'Markup Wawe',
    github: 'https://github.com/GaluzaMaksim996/verstka-wawe',
    demo: 'https://galuzamaksim996.github.io/verstka-wawe',
  },
  {
    id: 8,
    img: IMG2,
    title: 'Markup Seafood',
    github: 'https://github.com/GaluzaMaksim996/verstka-seafood',
    demo: 'https://galuzamaksim996.github.io/verstka-seafood',
  },
  {
    id: 9,
    img: IMG3,
    title: 'Markup Safari',
    github: 'https://github.com/GaluzaMaksim996/verstka-safari',
    demo: 'https://galuzamaksim996.github.io/verstka-safari',
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