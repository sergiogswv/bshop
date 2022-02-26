import Head from "next/head";
import Fondo from "./Fondo";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/**Meta */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Fondo />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
