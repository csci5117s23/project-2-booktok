import '@/styles/index.css'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn,UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/router';
import Layout from '../components/Navbar/Layout';

// pages that don't require a login
const publicPages = ["/", "/sign-up"];

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
const placesLibrary = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&libraries=places";

export default function App({ Component, pageProps }) {
  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  return <>
    <ClerkProvider>
      {/* load client-side google places library */}
      <script async
            src={placesLibrary}>
      </script>

      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Layout>
              <div id="map"></div>
              <Component {...pageProps} />
            </Layout>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}

    </ClerkProvider>
  </>
}
