import Head from 'next/head';
import Navbar from './Navbar';
import styles from './Layout.module.css';

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>BookTok - Project2 </title>
      </Head>

      <Navbar/>
        <div>
          {children}
        </div>

    </>
  );
}

