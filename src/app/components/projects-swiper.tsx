// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/legacy/image';
import match_sonoro_img from "../../../public/assets/img/amor_no_som.jpg";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function openPdf(documentPath: string) {
    window.open(documentPath, "_self");
}


export function ProjectsSwiper() {
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
        >
            <SwiperSlide>
                <Image
                    className="project-item"
                    onClick={() => openPdf('/Zine.pdf')}
                    src={'/assets/img/zine.jpg'}
                    alt="Zine"
                    height={700}
                    width={700}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className="project-item"
                    onClick={() => openPdf("/apresentacao_match_sonoro_06-13.pdf")}
                    src={match_sonoro_img}
                    alt="Match Sonoro"
                    height={700}
                    width={700}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className="project-item"
                    onClick={() => openPdf('/apresentacao_mita.pdf')}
                    src={"/assets/img/mita_page-0001.jpg"}
                    alt="Mita"
                    height={700}
                    width={700}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className="project-item"
                    onClick={() => openPdf('/apresentacao_prima_23.pdf')}
                    src={'/assets/img/prima_2023.jpeg'}
                    alt="Primavera 2023"
                    height={700}
                    width={700}
                />
            </SwiperSlide>
        </Swiper>
    );
};
