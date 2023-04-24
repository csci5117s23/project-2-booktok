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
      <div className="has-navbar-fixed-top">
        {children}
      </div>

    </>
  );
}

