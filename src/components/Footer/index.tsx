import { Link } from "react-router-dom";

import './style.css'

export default function Footer() {

  return (
    <footer>
      <p>Created By</p>
      <Link to="https://smudesigns.com">
        <img src={require('../../assets/logo-smu.png')}  alt="SMU Designs Logo"/>
      </Link>
    </footer>
  )
}