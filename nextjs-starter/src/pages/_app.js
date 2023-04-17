import Link from 'next/link' 
import '@/styles/index.css'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/router';
import { UserButton } from "@clerk/clerk-react";

// pages that don't require a login
const publicPages = ["/", "/sign-up"];

export default function App({ Component, pageProps }) {
  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  return <>
    <ClerkProvider {...pageProps} >
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
              <UserButton afterSignOutUrl="/"/> 
            </li>
          </ul>
        </nav>
      </header>

      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}

    </ClerkProvider>
  </>
}
