"use client";

import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/300noiseLogo.png";
import text300 from "../../public/assets/img/300.png";
import textNoise from "../../public/assets/img/noisetxt.png";

import { ContactForm } from "./components/contact-form";
import { ProjectsSwiper } from "./components/projects-swiper";

export default function Home() {
  const [clicks, setClicks] = useState(0);
  const [projectBackgroundPath, setProjectBackgroundPath] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openCloseNavLinks(): undefined {
    if (typeof window !== "undefined") {
      let navScreenDisplay = document.getElementById("nav-links");
      let closeButtonDisplay = document.getElementById("close-button");
      if (navScreenDisplay && closeButtonDisplay) {
        navScreenDisplay.style.display === "none"
          ? (navScreenDisplay.style.display = "block")
          : (navScreenDisplay.style.display = "none");
        closeButtonDisplay.style.display === "none"
          ? (closeButtonDisplay.style.display = "block")
          : (closeButtonDisplay.style.display = "none");
      }
    }
  }

  function openStore() {
    window.open("https://loja300noise.lojavirtualnuvem.com.br/", "_blank");
  }

  function updateProjectsBackgroundCallBack(path: string) {
    setProjectBackgroundPath(path);
    console.log(projectBackgroundPath);
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
      <section className="home" id="home">
        <div className="event-info text-italic fs-16">
          <p>
            PESQUISA: O AMOR ESTÁ NO AR?<span> DESCUBRA AGORA</span>
          </p>
        </div>
        <div className="landing">
          <div className="images-container">
            <div className="image-300">
              <Image className="landing-300" src={text300} alt="300" />
            </div>

            <div className="image-noise">
              <Image className="landing-noise" src={textNoise} alt="300" />
            </div>
          </div>
        </div>

        <footer className="text-italic">
          <ul>
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
        </footer>
      </section>
      <section className="projects" id="projects">
        <div className="bg-image">
          <Image
            src={projectBackgroundPath}
            alt="O amor está no ar?"
            layout="fill"
          ></Image>
        </div>
        <div className="section-title">
          <h3>NOSSOS PROJETOS</h3>
        </div>
        <div className="projects-showcase"> 
            <ProjectsSwiper updateProjectsBackgroundCallBack={updateProjectsBackgroundCallBack}></ProjectsSwiper>
        </div>
      </section>
      <section className="about dark-text" id="about">
        <div className="about-info-wrapper">
          <div className="section-title about-title">
            <h3>QUEM SOMOS</h3>
          </div>
          <div className="text-area">
            <p>
              <strong>
                A 300Noise é um estúdio de pesquisa e comunicação focado em
                cultura.
              </strong>
            </p>

            <p>
              Nossa equipe é formada por cientistas sociais, profissionais da
              comunicação, história, geografia e artes visuais. A partir dessa
              diversidade, criamos uma fórmula bem particular de analisar a
              música, a cultura e as pessoas.
            </p>

            <p>
              A 300Noise se apoia em números, redes sociais, teoria da
              comunicação, história, charts, tendências e tudo mais que for útil
              para analisar a realidade. Trabalhamos para difundir conhecimento
              sobre música e cultura, produzindo conteúdo de qualidade e sem
              amarras. Produzimos análises de dados, consultorias, pesquisas,
              estratégias de comunicação e curadoria...{" "}
              <strong>ou o que mais você e seu projeto precisarem.</strong>
            </p>
          </div>
        </div>
        <div className="about-cards-wrapper">
          <div className="about-card text-italic">
            <div className="about-card-outline"></div>
            <div className="icon">
              <img src="/consultoria.png" alt="consultoria" />
            </div>
            <div className="card-text">
              <p>CONSULTORIA</p>
            </div>
          </div>
          <div className="about-card text-italic">
            <div className="about-card-outline"></div>
            <div className="icon">
              <img
                src="assets/img/assessoria.png"
                alt="assessoria de comunicação"
              />
            </div>
            <div className="card-text">
              <p>ASSESSORIA DE COMUNICAÇÃO</p>
            </div>
          </div>
          <div className="about-card text-italic">
            <div className="about-card-outline"></div>
            <div className="icon">
              <img src="assets/img/music branding.png" alt="music branding" />
            </div>
            <div className="card-text">
              <p>MUSIC BRANDING</p>
            </div>
          </div>
          <div className="about-card text-italic">
            <div className="about-card-outline"></div>
            <div className="icon">
              <img src="assets/img/producao.png" alt="produção de projetos" />
            </div>
            <div className="card-text">
              <p>PRODUÇÃO DE PROJETOS</p>
            </div>
          </div>
          <div className="about-card text-italic">
            <div className="about-card-outline"></div>
            <div className="icon">
              <img src="assets/img/estudos.png" alt="estudos comportamentais" />
            </div>
            <div className="card-text">
              <p>ESTUDOS COMPORTAMENTAIS</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact dark-text" id="contact">
        <ContactForm></ContactForm>
      </section>
    </div>
  );
}
