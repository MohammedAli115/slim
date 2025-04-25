
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../TeamSlider.css';
import { motion } from 'framer-motion';

const images = [
    '/team images/team1.jpg',
    '/team images/team2.jpg',
    '/team images/team3.jpg',
    '/team images/team4.jpg',
    '/team images/team5.jpg',
    '/team images/team6.jpg',
    '/team images/team7.jpg',
    '/team images/team8.jpg',
    '/team images/team9.jpg',
    '/team images/team10.jpg',
    '/team images/team11.jpg',
];

function Team() {
    return (
        <motion.div
            className="slider-container"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 1 }}  
            viewport={{ once: false }}  
        >
            <Swiper
                effect="coverflow"
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView="auto"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`slide-${index}`} />
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </motion.div>
    );
}

export default Team;
