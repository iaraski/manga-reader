import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { Mousewheel } from 'swiper/modules';
import "./TopManga.css";
import { fakeMangaData } from "../../Data/Data.tsx";

const TopManga: React.FC = () => {
    return (
        <section className="topManga">
            <h2>Горячие новинки</h2>
            <div className="top-manga-carousel">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10} /* Промежуток между карточками */
                    mousewheel={true}
                    modules={[Mousewheel]}
                    loop={true}
                >
                    {fakeMangaData.map((manga) => (
                        <SwiperSlide key={manga.id}>
                            <div className="top-manga-card">
                                <img src={manga.image} alt={manga.title} />
                                <h3>{manga.title}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TopManga;
