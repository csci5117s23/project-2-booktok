import Head from 'next/head';
import Navbar from './Navbar';


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

