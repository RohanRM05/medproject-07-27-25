'use client';
import React from 'react';
import './globals.css';

export default function Home() {
  return (
    <>
      <header className="navbar">
        <button className="logo-btn">

          
          {/* om du hittar en bättre logo lägg den i public/images och ändra på sökvägen*/}
          <img src="/images/logo.png" alt="Logo" className="logo-img" />

          
          <span className="logo-text">MediLink</span>
        </button>
        <button className="sign-in-btn">Sign In</button>
      </header>

      <main style={{ height: '2000px' }}>
        <h1>Connect professionals with...</h1>
      </main>
    </>
  );
}
