// Import Swiper React components
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/legacy/image';
import match_sonoro_img from "../../../public/assets/img/amor_no_som.jpg";
import projectsData from "../temp-data/projects.json"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function openPdf(documentPath: string) {
    window.open(documentPath, "_self");
}


export function ProjectsSwiper({updateProjectsBackgroundCallBack}: any) {
    return (
        <Swiper
            pagination={{ clickable: true }}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            modules={[Navigation]}
            slidesPerView={1.5}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
                100: {
                    slidesPerView: 1.15,
                },
                768: {
                    slidesPerView: 
                    3,
                },
            }}
            className="swiper-container"
            onSlideChange={(swiper) => updateProjectsBackgroundCallBack(swiper.slides[swiper.activeIndex].dataset.id)}
        >
            {projectsData.data.map(project => (
                <SwiperSlide data-id={project.image_src} key={project.alt_text}>
                    <Image
                        className="project-item"
                        onClick={() => openPdf(project.pdf_file)}
                        src={project.image_src}
                        alt={project.alt_text}
                        height={550}
                        width={550}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
