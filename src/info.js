import { AiFillLinkedin } from 'react-icons/ai'
import { BsTelegram, BsGithub } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

export const MyPhoto = '/photo.jpg'
export const MyName = 'Olya'
export const MyLocation = 'Georgia, Tbilisi'
export const AboutText = (
  <>
    <h5>Hi everyone!</h5>
    <p>
      My name is Olya, I'm a junior front-end developer (React). This is my mini-project for job test. In my life I am fond of traveling, anime and
      drawing, I also like to play board games and sometimes make them {':)'}
    </p>
  </>
)

export const MyLinks = [
  { Component: BsGithub, link: 'https://github.com/Olyathecute' },
  { Component: HiMail, link: 'mailto:sitnikova.olga.v@outlook.com' },
  { Component: BsTelegram, link: 'https://t.me/olga_sitnikova' },
  { Component: AiFillLinkedin, link: 'https://www.linkedin.com/in/olga-sitnikova-a331a3230/' }
]

export const NavLinks = [
  { to: '/', link: 'Gallery' },
  { to: '/about', link: 'About' }
]

export const numOfPhotosInGroup = 6
export const numOfAllPhotos = 24
