'use client';
import React from 'react';
import './globals.css';

export default function Home() {
  return (
    <>
      <header className="navbar">
        <button className="logo-btn">

          
          <img src="/images/LogoTyp1.png" alt="Logo" className="logo-img" />

        </button>
        <header className="rightBarButtons">
          <button className="sign-in-btn">Sign In</button>
          <button className="sign-up-btn">Sign up</button>
        </header>
      </header>

    <main style={{ height: '2000px' }}>
      <h1>Connect professionals with...</h1>
    </main>
    </>
  );
}