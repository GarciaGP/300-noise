import { ProjectsSwiper } from "@/app/components/projects-swiper";
import Image from "next/legacy/image";
import { useState } from "react";
import './projects.css'


export function Projects() {
    const [projectBackgroundPath, setProjectBackgroundPath] = useState('');

    function updateProjectsBackgroundCallBack(path: string) {
        setProjectBackgroundPath(path);
        console.log(projectBackgroundPath);
    }

    return (
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
    )
}