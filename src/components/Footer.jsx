import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsTelegram, BsGithub } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <div>
      <BsGithub />
      <HiMail />
      <BsTelegram />
      <AiFillLinkedin />
    </div>
  )
}
