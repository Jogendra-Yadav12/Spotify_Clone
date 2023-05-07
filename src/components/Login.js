import React from 'react';
import '../styles/login.css';
import img from '../assets/login_logo.png'

export default function Login() {
  return (
    <container className='container'>
      <img src={img} alt=''/>
      <button>Connect Spotify</button>
    </container>
  )
}
