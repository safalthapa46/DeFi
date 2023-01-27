import React from 'react'
import Video from '../../assets/video.mp4'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4'/>
        </video>
        <div className='hero-text'>
            <h1>Decentralized</h1>
            <h1><span className='blue'>Trending</span> Protocol</h1>
            <p>Guaranteed liquidity trading for millions of users and top Ethreum applications</p>

            <div className='btn-group'>
                <button className='btn'>Use DeFi</button>
                <button className='btn btn-outline'>FAQ</button>
            </div>
        </div>
        <div className='bottom-text'>
            <h2>Totol volume Secured: $42,104,783,662.47</h2>
        </div>
    </div>
  )
}

export default Hero
