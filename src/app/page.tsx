"use client";
import React from "react";
import "./globals.css";

export default function Home() {
  return (
    <>
      <main style={{ height: "2000px", backgroundColor: "#E7EEF6" }}>


        <header className="navbar">
          <button className="logo-btn">
            <img src="/images/LogoTyp1.png" alt="Logo" className="logo-img" />
          </button>
          <header className="rightBarButtons">
            <button className="sign-in-btn">Sign In</button>
            <button className="sign-up-btn">Sign up</button>
          </header>
        </header>

        <div className="parent">
            <div className="div1" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <h1 style={{ textAlign: "center", maxWidth: "1000px", fontSize: "3rem", fontWeight: "bold" }}>
                Plattformen för framtidens vårdbemanning
              </h1>
              <p style={{ textAlign: "center", maxWidth: "700px", marginTop: "1rem" }}>
                Använd av vårdpersonal och vårdgivare över hela landet  vår lösning förenklar rekrytering, sänker kostnader och tar bort mellanhänder. Allt i ett modernt och användarvänligt gränssnitt.
              </p>
            </div>
            <div className="div2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src="/images/frontpageimg.jpg"
              alt="Front Page"
              style={{width: "90%", height: "90%", objectFit: "cover", display: "block"
              }}
            />
            </div>
          <div className="div3"></div>
        </div>




      </main>
    </>
  );
}
