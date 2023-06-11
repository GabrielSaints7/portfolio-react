import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


const SocialIcons = (props) => {
    return (
        <div className={props.position}>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><BsYoutube /></a>
        </div>
    )
}

export default SocialIcons
