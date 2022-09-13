import '../styles/globals.css'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider loginUrl="/api/auth/login">
      <Component {...pageProps} />
    </UserProvider>
  );
  };