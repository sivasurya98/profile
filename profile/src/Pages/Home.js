import React from 'react'
import '../App.css';
import Navbar from './Navbar';
import '../Styles/Home.css'
import node from '../assets/nodejs.png'
import react from '../assets/react.png'
import javascript from '../assets/js.png'
import mangodb from '../assets/mongodb.png'
import css from '../assets/css.png'
import ParticlesBachground from '../Components/ParticleBackground'

function Home() {
  return (
    <div>
        <Navbar />
        <div>
          <br  />
          <div className="main-text">
            <span>
              HELLO, I'M D.SURYA PRAKASH, 
            </span>
            <br />
            <span>
              REACT DEVELOPER
            </span>
          </div>
        <div className="child-text">
          <span style={{color: 'red'}}>
              *
            </span>
            <span>
              i spacialized in React development, web design.
            </span>
            <br />
            <span>
              AND UI/UX design.
            </span>
        </div>
        </div>
        <br />
        <br />
          <h2 style={{textAlign: 'center', color: 'white'}}>Technologies Familier with</h2>
        <div className="card">
          <div>
          <img className="nodejs" src={node} alt='my logo' width={100}/>
          </div>
          <div>
          <img className="rotating-logo" src={react} alt='my logo' width={100} />
          </div>
          <div>
          <img src={javascript} alt='my logo' width={100} />
          </div>
          <div>
          <img src={mangodb} alt='my logo' width={100} />
          </div>
          <div>
          <img src={css} alt='my logo' width={100} />
          </div>
        </div>
        <ParticlesBachground />
    </div>
  )
}

export default Home