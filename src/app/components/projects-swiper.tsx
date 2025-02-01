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
            spaceBetween={30}
            loop={true}
            modules={[Pagination, Navigation]}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1080: {
                    slidesPerView: 3,
                },
            }}
            className="swiper-container"
            onSlideChange={(swiper) => updateProjectsBackgroundCallBack(swiper.slides[swiper.activeIndex].dataset.id)}
        >
            {projectsData.data.map(project => (
                <SwiperSlide data-id={project.image_src}>
                    <Image
                        className="project-item"
                        onClick={() => openPdf(project.pdf_file)}
                        src={project.image_src}
                        alt={project.alt_text}
                        height={600}
                        width={600}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
