import Image from "next/legacy/image";

import text300 from "../../../../public/assets/img/300.png";
import textNoise from "../../../../public/assets/img/noisetxt.png";
import { useState } from "react";

export function Landing() {
  return (
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
  )
}