import Link from 'next/link';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <header>
      <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            YumYum Tok
            {/* <img src="/BookTokLogo.png" alt="BookTok" className='navbar__logo' /> */}
          </Link>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className='navbar-item' href="/search"> Search</Link>
            <Link className='navbar-item' href="/map"> Map</Link>
            <Link className='navbar-item' href="/profile"> Profile</Link>
            <Link className='navbar-item' href="/camera"> Camera</Link>
            <UserButton className='navbar-item' afterSignOutUrl="/" />
          </div>
        </div>

        
          {/* <li>
            <Link href="/profile"> Profile</Link>
          </li>

          <li>
            <Link href="/camera"> Camera</Link>
          </li>

          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul> */}
      </nav>
    </header>
  );
}

