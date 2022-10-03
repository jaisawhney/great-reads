import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <UserProvider loginUrl="/api/auth/login">
        <Component {...pageProps} />
      </UserProvider>{" "}
      {/* footer currently empty, removing for demo */}
      <Footer />
    </>
  );
}

export default MyApp;
