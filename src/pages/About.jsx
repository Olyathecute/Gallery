import React from 'react'
import { Image } from 'react-bootstrap'
import { MyPhoto, AboutText } from '../info'

export default function About() {
  console.log(process?.env, window?.env)
  return (
    <div className="flex-grow-1 m-3">
      <Image className="me-2 w-25 rounded border border-dark float-start" src={MyPhoto} />
      <div>{AboutText}</div>
    </div>
  )
}
