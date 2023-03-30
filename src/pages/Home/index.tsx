import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Home() {

  return (
    <div id="home">
      <section className="hero">
        <div className="heroTxt">
          <h1 className="txtLight">Bonjour! </h1>
          <p className="txtLight">This website has a variety of reference materials for French grammar and vocabulary</p>
          <Link to="/r/" className='btnSecondary'>Start Learning!</Link>
        </div>
      </section>

      <section className="container">
        <div className="highlightCon">
          <div className="highlightBox">
            <h3 className="mb-2">Vocabulary</h3>
            <Link to="/r/vocabulary">Start Learning &gt;</Link>
          </div>

          <div className="highlightBox borders">
            <h3 className="mb-2">Sentance Structure</h3>
            <p>Coming Soon!</p>
          </div>

          <div className="highlightBox">
            <h3 className="mb-2">Conjugation</h3>
            <p>Coming Soon!</p>
          </div>
        </div>
      </section>
    </div>
  )
}