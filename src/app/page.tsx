"use client";

import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/300noiseLogo.png";
import { Landing } from "./section-components/landing/landing";

import { Projects } from "./section-components/projects/projects";
import { About } from "./section-components/about/about";
import { Contact } from "./section-components/contact/contact";

export default function Home() {
  const [clicks, setClicks] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openStore() {
    window.open("https://loja300noise.lojavirtualnuvem.com.br/", "_blank");
  }

  return (
    <div className="container" onClick={() => setClicks(clicks + 1)}>
      {clicks <= 0 && (
        <div onClick={openStore} className="banner-image">
          <img
            src="assets/img/nova_site.jpg"
            alt="Confira a nova coleção na loja!"
          />
        </div>
      )}

      {clicks < 1 && <div className="window-darker"></div>}

      <header>
        <div className="logo">
          {/* <img src="../ assets/img/300noiseLogo.png" alt="300Noise Logo" /> */}
          <Image src={logo} alt="300 Noise Logo" width={100} height={50} objectFit="cover" />
        </div>

        <div className="openbtn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="openbtn-area">
            <span></span>
            <span></span>
            <span></span>
            <p
              className="close-span"
              id="close-button"
              style={{ display: isMenuOpen ? "block" : "none" }}
            >
              X
            </p>
          </div>
        </div>

        <div
          className="nav-links"
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          <div className="nav-content">
            <div className="menu-image">
              <Image src={logo} alt="300 Noise Logo" />
            </div>
            <ul className="section-select">
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#home">HOME</a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#projects">NOSSOS PROJETO</a>S
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#about">QUEM SOMOS</a>
              </li>
              <li>
                <a href="https://loja300noise.lojavirtualnuvem.com.br/">LOJA</a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#contact">CONTATO</a>
              </li>
            </ul>
            <ul className="section-links">
              <li>
                <a href="https://www.instagram.com/300noise/">INSTAGRAM</a>
              </li>
              <li>
                <a href="https://x.com/300noise">TWITTER</a>
              </li>
              <li>
                <a href="https://open.spotify.com/show/7MB3QCNBkMcTaXsP9VWU20?si=7e844d76bd51459d">
                  SPOTIFY
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Landing></Landing>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
}
