import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css'

// - Home
//    - About
//    - Contact
//    - Products

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>

    </div>
  )
}

export default Navbar