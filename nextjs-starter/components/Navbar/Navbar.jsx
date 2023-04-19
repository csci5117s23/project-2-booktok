import Link from 'next/link';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <Link href="/">
          <img src="/BookTokLogo.png" alt="BookTok" className='navbar__logo' />
        </Link>

        <ul className='navbar__menu'>
          <li>
            <Link href="/search"> Search</Link>
          </li>

          <li>
            <Link href="/map"> Map</Link>
          </li>

          <li>
            <Link href="/profile"> Profile</Link>
          </li>

          <li>
            <Link href="/camera"> Camera</Link>
          </li>

          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

