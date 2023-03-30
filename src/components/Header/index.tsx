import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Header() {

  return (
    <header className="width100">
      <div className="">
        <Link to="/">
          <h3 className="semibold txtPrimary">Cahier de <span className='semibold txtSecondary'>Français</span></h3>
        </Link>
      </div>
      <nav>
        <Link to='/r/'>Directory</Link>
      </nav>
    </header>
  )
}