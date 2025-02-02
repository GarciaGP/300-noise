export function About() {
    return (
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
    )
}