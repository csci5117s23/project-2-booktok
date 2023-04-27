import Link from 'next/link';
import { useState } from 'react';
import { ClerkProvider, SignedIn, SignedOut, useClerk, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  const [clicked, setClick] = useState(false);
  const { signOut } = useClerk();

  return (
    <header>
      <nav className="navbar is-success is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-brand mr-5">
          <Link className="navbar-item has-text-weight-bold is-size-5" href="/">
            YumYumTok
            {/* NOTE: Have to make a new logo or just use word */}
            {/* <img src="/BookTokLogo.png" alt="BookTok" className='navbar__logo' /> */}
          </Link>
          <a role="button" onClick={() => {setClick(!clicked);}} className={`navbar-burger burger ${clicked ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        
        {/* Hidden in mobile device */}
        <div id="navbarBasicExample" className={`navbar-menu ${clicked ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link className='navbar-item' href="/search"> Restaurants</Link>
            <Link className='navbar-item' href="/map"> Map</Link>
            <Link className='navbar-item' href="/profile"> My Account</Link>
            <Link className='navbar-item' href="/camera"> Camera</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-small is-success is-light"  onClick={() => signOut()}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

