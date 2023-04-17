import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import Layout from '../components/Layout';
import '@/styles/globals.css';
import 'bulma/css/bulma.min.css';
import { useRouter } from 'next/router';
import { UserButton } from "@clerk/clerk-react";

// pages that don't require a login
const publicPages = ["/", "/sign-up"];

export default function App({ Component, pageProps }) {
  // Get the pathname
  // const { pathname } = useRouter();

  // Check if the current route matches a public page
  // const isPublicPage = publicPages.includes(pathname);

  return (
    <>
      <ClerkProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </>
  )
}
