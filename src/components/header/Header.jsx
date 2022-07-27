import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/me.png'

import './Header.scss'

const Header = () => {
  
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Maksim Galuza</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a className='scroll__down' href='#contact'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header