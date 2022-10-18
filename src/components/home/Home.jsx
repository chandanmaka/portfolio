import React from 'react'
import Data from './Data'
import Social from './Social'
import './home.css'
import Scrolldown from './Scrolldown'

function Home() {
  return (
    <section className='home section' id='home'>
        <div className="home__container container grid">
          <div className="home__content grid">
              <Social />

              <div className="home__img">
                

              </div>

              <Data />
          </div>
          <Scrolldown />
        </div>
        
    </section>
  )
}

export default Home