import Head from 'next/head';
import Navbar from './Navbar';
import 'bulma/css/bulma.css';


export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>BookTok - Project2 </title>
      </Head>
      <Navbar className="navbar is-fixed-top"/>
      <div className="columns is-centered px-5 mt-5">
        {children}
      </div>
    </>
  );
}

