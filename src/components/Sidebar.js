import React from 'react'
import '../styles/sidebar.css'
import {MdLibraryMusic} from 'react-icons/md'
import {AiFillHome,AiOutlineSearch} from 'react-icons/ai'
import logo from '../assets/sidebar_logo.png'
import Playlist from './Playlist'

export default function Sidebar() {
  return (
    <container className="sidebar">
        <div className='top_links'>
            <div className='logo'>
                <img src={logo} alt='' />
            </div>
            <ul>
                <li><AiFillHome/><span>Home</span></li>
                <li><AiOutlineSearch /><span>Search</span></li>
                <li><MdLibraryMusic /><span>Your Library</span></li>
            </ul>
        </div>
        <Playlist/>
    </container>
  )
}
