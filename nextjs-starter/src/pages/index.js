import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SignUp, SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { userID, getToken, isLoaded, isSignedIn } = useAuth();

  const router = useRouter()

  //logged in, so redirect to /todos
  if(isSignedIn) {
    // console.log("userID", userID);
    router.push('/home');
  }
  //not logged in, so show login screen
  else{
    return <>
        <Head>
          <title>BookTok Project 2</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>

        <h1 className={styles.title}>Welcome to YumYumTok!</h1>

        <SignIn path="/" routing="path" signUpUrl="/sign-up" redirectUrl='home'/>

        </main>
      </>
  }
}
