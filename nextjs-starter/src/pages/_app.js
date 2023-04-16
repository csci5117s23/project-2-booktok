import Link from 'next/link' 
import '@/styles/index.css'
import { ClerkProvider } from '@clerk/nextjs'




export default function App({ Component, pageProps }) {
  return <>
    <header>
    <ClerkProvider {...pageProps} >
    </ClerkProvider>
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
            <Link href="/login"> Login</Link>
          </li>
        </ul>

        
      </nav>
    </header>

    <Component {...pageProps} />  
  </>
}
