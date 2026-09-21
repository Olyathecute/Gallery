import { AiFillLinkedin } from 'react-icons/ai'
import { BsTelegram, BsGithub } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

export const MyPhoto = '/Gallery/photo.jpg'
export const MyName = 'Olya'
export const MyLocation = 'Georgia, Tbilisi'
export const AboutText = (
  <>
    <p style={{ margin: '0' }}>
      Photography is a great way to capture special moments and keep memories for the future. A photograph can remind us of a particular person,
      place, or event even many years later. I think photography is interesting because it allows us to see ordinary things from a different
      perspective. Sometimes a simple picture of a street, a sunset, or a cup of coffee can create a strong feeling. For me, photographs are not just
      pictures — they are small pieces of our lives that we can keep forever.
    </p>
  </>
)

export const MyLinks = [
  { Component: BsGithub, link: 'https://github.com/Olyathecute' },
  { Component: HiMail, link: 'mailto:sitnikovaov@outlook.com' },
  { Component: BsTelegram, link: 'https://t.me/olga_sitnikova' },
  { Component: AiFillLinkedin, link: 'https://www.linkedin.com/in/olga-sitnikova-a331a3230/' }
]

export const NavLinks = [
  { to: '/', link: 'Gallery' },
  { to: '/about', link: 'About' }
]

export const numOfPhotosInGroup = 6
export const numOfAllPhotos = 24

export const imageDescription = 'A beautiful picture'
