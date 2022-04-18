import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://t.me/MaksimProgrammist' target='_blank'><FaTelegram /></a>
      <a href='https://github.com/GaluzaMaksim996' target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocial