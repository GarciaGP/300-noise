'use client'

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import styles from "./page.module.css";
import logo from "../../public/images/300noiseLogo.png"
import text300 from "../../public/assets/img/300.png"
import textNoise from "../../public/assets/img/noisetxt.png"
import match_sonoro_img from "../../public/assets/img/amor_no_som.jpg"
import consultoria from "../../public/assets/img/consultoria.png"
import musicBranding from "../../public/assets/img/music branding.png"
import assessoria from "../../public/assets/img/assessoria.png"

export default function Home() {

  const [emailSent, setEmailSent] = useState(false);
  const [clicks, setClicks] = useState(0);

  function openCloseNavLinks(): undefined {
    if (typeof window !== "undefined") {
      let navScreenDisplay = document.getElementById('nav-links');
      let closeButtonDisplay = document.getElementById('close-button');
      if (navScreenDisplay && closeButtonDisplay) {
        navScreenDisplay.style.display === "none" ? navScreenDisplay.style.display = "block" : navScreenDisplay.style.display = "none";
        closeButtonDisplay.style.display === "none" ? closeButtonDisplay.style.display = "block" : closeButtonDisplay.style.display = "none";
      }
    }
  }

  function openPdf() {
    window.open('https://www.300noise.com.br/images/apresentacao_match_sonoro_06-13.pdf', '_self');
  }

  function openStore() {
    window.open('https://loja300noise.lojavirtualnuvem.com.br/', '_blank');
  }

  // openCloseNavLinks();
  // openCloseNavLinks();

  return (
    
    <div className="container" onClick={() => setClicks(clicks +1)}>
      {clicks <= 0 && <div onClick={openStore} className="banner-image">
        <img src="assets/img/nova_site.jpg" alt="Confira a nova coleção na loja!" />
      </div>}

      <header>
        <div className="logo">
          {/* <img src="../ assets/img/300noiseLogo.png" alt="300Noise Logo" /> */}
          <Image
            src={logo}
            alt="300 Noise Logo"
          />
        </div>

        <div className="openbtn" onClick={openCloseNavLinks}>
          <div className="openbtn-area"><span></span><span>
          </span><span></span>
            <p className="close-span" id="close-button">X</p>
          </div>
        </div>



        <div className="nav-links" id="nav-links">
          <div className="nav-content">
            <div className="menu-image">
              <Image
                src={logo}
                alt="300 Noise Logo"
              />
            </div>
            <ul className="section-select">
              <li onClick={openCloseNavLinks}><a href="#home">HOME</a></li>
              <li onClick={openCloseNavLinks}><a href="#projects">NOSSOS PROJETO</a>S</li>
              <li onClick={openCloseNavLinks}><a href="#about">QUEM SOMOS</a></li>
              <li><a href="https://loja300noise.lojavirtualnuvem.com.br/">LOJA</a></li>
              <li onClick={openCloseNavLinks}><a href="#contact">CONTATO</a></li>
            </ul>
            <ul className="section-links">
              <li><a href="https://www.instagram.com/300noise/">INSTAGRAM</a></li>
              <li><a href="https://x.com/300noise">TWITTER</a></li>
              <li><a href="https://open.spotify.com/show/7MB3QCNBkMcTaXsP9VWU20?si=7e844d76bd51459d">SPOTIFY</a></li>
            </ul>
          </div>

        </div>

      </header>
      <section className="home" id="home">
        <div className="event-info text-italic fs-16">
          <p>PESQUISA: O AMOR ESTÁ NO AR?<span> DESCUBRA AGORA</span></p>
        </div>
        <div className="landing">
          {/* <img className="landing-300" src="assets/img/300.png" />
              <img className="landing-noise" src="assets/img/noisetxt.png" /> */}
          <div className="images-container">
            <div className="image-300">
              <Image
                className="landing-300"
                src={text300}
                alt="300"
              />
            </div>

            <div className="image-noise">
              <Image
                className="landing-noise"
                src={textNoise}
                alt="300"
              />
            </div>
          </div>
        </div>

        <footer className="text-italic">
          <ul>
            <li><a href="https://www.instagram.com/300noise/">INSTAGRAM</a></li>
            <li><a href="https://x.com/300noise">TWITTER</a></li>
            <li><a href="https://open.spotify.com/show/7MB3QCNBkMcTaXsP9VWU20?si=7e844d76bd51459d">SPOTIFY</a></li>
          </ul>
        </footer>
      </section>
      <section className="projects" id="projects">
        <div className="bg-image">
          <Image
            src={"/assets/img/match_sonoro.jpeg"}
            alt="O amor está no ar?"
            fill={true}
          >
          </Image>
          {/* backgroundImage: `url(/assets/img/match_sonoro.jpeg)` */}
          {/* <div className="blur"></div> */}
        </div>
        <div className="section-title">
          <h3>NOSSOS PROJETOS</h3>
        </div>
        <div className="projects-showcase">
          <div className="project-item" onClick={openPdf}>
            {/* <img src="./assets/img/match_sonoro.jpeg" alt="Match Sonoro" /> */}
            <Image
              src={match_sonoro_img}
              alt="Match Sonoro"
            />
          </div>
        </div>
      </section>
      <section className="about dark-text" id="about">
        <div className="section-title about-title">
          <h3>QUEM SOMOS</h3>
        </div>
        <div className="text-area">
          <p>A 300Noise é um estúdio de pesquisa e comunicação focado em cultura.</p>

          <p>Nossa equipe é formada por cientistas sociais, profissionais da comunicação, história, geografia
            e artes visuais. A partir dessa diversidade, criamos uma fórmula bem particular de analisar a
            música, a cultura e as pessoas.</p>

          <p>A 300Noise se apoia em números, redes sociais, teoria da comunicação, história, charts,
            tendências e tudo mais que for útil para analisar a realidade. Trabalhamos para difundir
            conhecimento sobre música e cultura, produzindo conteúdo de qualidade e sem amarras. Produzimos
            análises de dados, consultorias, pesquisas, estratégias de comunicação e curadoria... ou o que
            mais você e seu projeto precisarem.</p>

        </div>
        <div className="about-cards-wrapper">
          <div className="about-card text-italic">
            <div className="about-card-outline"></div>
            <div className="icon">
              <img src="/consultoria.png" alt="consultoria" />
              {/* <Image
              fill={false}
                className="icon-img"
                src="/consultoria.png"
                alt="consultoria"
              /> */}
            </div>
            <div className="card-text">
              <p>CONSULTORIA</p>
            </div>
          </div>
          <div className="about-card text-italic">
            <div className="about-card-outline"></div>
            <div className="icon">
              <img src="assets/img/assessoria.png" alt="assessoria de comunicação" />
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
              {/* <Image
                fill={true}
                src="/producao.png"
                alt="produção"
              /> */}
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

        <div className="section-title">
          <h3>BORA BATER UM PAPO?</h3>
        </div>
        <div className="text-area">
          <p>Quer a nossa visão e produção presentes na sua ideia? Precisa de dados e análises? Entre em contato!</p>
        </div>
        <div className="text-area">
          <p>
            Se preferir, entre em contato via 300noise@gmail.com.</p>
        </div>

        {!emailSent ? <div className="form-wrapper">
          <form action="post">
            <input type="text" name="name" id="" placeholder="Nome" />
            <input type="text" name="email" id="" placeholder="Email" />
            <textarea rows={8} name="suggestions" id=""
              placeholder="O que tem para nos dizer?"></textarea>
            <button onClick={() => setEmailSent(true)} type="submit">ENVIAR</button>
          </form>
        </div> :
          <div><p>Recebemos seu e-mail!</p>
            <p>Responderemos assim que possível! </p></div>
        }
        {/* <div className="form-area">
          <div className="form-wrapper">
            <form action="post">
              <input type="text" name="name" id="" placeholder="Nome" />
              <input type="text" name="email" id="" placeholder="Email" />
              <textarea rows={8} name="suggestions" id=""
                placeholder="O que tem para nos dizer?"></textarea>
              <button type="submit">ENVIAR</button>
            </form>
          </div>
        </div> */}
      </section>

      {/* <div id="news" className="news">
        <div className="modal-content">
        <img src="assets/img/png_loja.png" alt="Imagem Loja" />
        </div>
      </div> */}

    </div>



  );
}
