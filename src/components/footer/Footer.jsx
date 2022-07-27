import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'


import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Maksim Galuza</a>
      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://t.me/MaksimProgrammist'><FaTelegramPlane /></a>
        <a href='https://github.com/GaluzaMaksim996'><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Maksim Galuza. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer