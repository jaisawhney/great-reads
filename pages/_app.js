import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider loginUrl="/api/auth/login">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  );
}

export default MyApp;
