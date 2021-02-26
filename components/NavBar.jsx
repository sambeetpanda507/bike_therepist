import Link from "next/link";
import {useState} from 'react';
import navStyle from "../styles/NavBar.module.css";

const NavBar = () => {
  const [control,setControl]=useState(false);
  
  const handleControl=()=>{
    setControl((prev) => !prev);
  }

  return (
    <nav className={navStyle.myNav}>
      <ul className={navStyle.navContainer}>
        <li className={navStyle.brand}>
          <Link href="/">
            <a className={navStyle.logo}>
              <span className={navStyle.logoStyle}>Bike</span>
              <strong>Therapist</strong>
            </a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/about">
            <a>about us</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/services">
            <a>services</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/how-it-works">
            <a>how it works</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/pricing">
            <a>pricing</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/contact-us">
            <a>contact us</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li>
        <li className={navStyle.searchBtn}>
          <i className="fas fa-search fa-2x"></i>
          <button>book service</button>
        </li>

        <li className={navStyle.menu}>
         
        <div className={`${navStyle.curtain} ${control ? navStyle.active:""}`}>
        <span></span>
        <span></span>
        <span></span>
        <ul>
            <li>
              <Link href="/">
              <a onClick={handleControl}>Home</a>
              </Link>
            </li>
            <li>
            <Link href="/about">
            <a onClick={handleControl}>About Us</a>
            </Link>
            </li>
            <li>
            <Link href="/services">
            <a onClick={handleControl}>Services</a>
            </Link>
            </li>
            <li>
            <Link href="/how-it-works">
            <a onClick={handleControl}>How It Works ?</a>
            </Link>
            </li>
            <li>
            <Link href="/pricing">
            <a onClick={handleControl}>Pricing</a>
          </Link>
            </li>
            <li>
            <Link href="/contact-us">
            <a onClick={handleControl}>Contact Us</a>
          </Link>
            </li>
            <li>
            <Link href="/blog">
            <a onClick={handleControl}>Blog</a>
            </Link>
            </li>
        </ul>
        </div>
      
          <div className={navStyle.hamburger} onClick={handleControl}>
            <div>-</div>
            <div>-</div>
            <div>-</div>
          </div>
        </li>
      
      </ul>
    </nav>
  );
};

export default NavBar;
