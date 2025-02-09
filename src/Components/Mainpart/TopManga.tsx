import React from "react";
import { fakeMangaData } from "../../Data/Data.tsx";
import Mangacard from "./Mangacards.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Основной CSS для Swiper
import "swiper/css/pagination"; // CSS для пагинации
import "swiper/css/navigation";

const TopManga: React.FC = () => {
    const settings = {
        slidesPerView: 10, // Количество видимых слайдов
        spaceBetween: 0, // Пробел между слайдами
        loop: true, // Циклический режим
        speed: 500, // Скорость анимации
        navigation: true, // Добавляем навигацию (стрелки)
        pagination: { clickable: true }, // Добавляем пагинацию
        breakpoints: {
            // Адаптивность для разных размеров экрана
            768: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
            320:{
                slidesPerView: 2,
                spaceBetween: 0,
            },
            425:{
                slidesPerView: 3,
            },
            600:{
                slidesPerView: 6,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 7,
                spaceBetween:0,
            },
            1120:{
                slidesPerView: 8,
            },
            1440:{
                slidesPerView: 10,
            }
        },
    };

    return (
            <Swiper {...settings} className="swiper-container" >
                {fakeMangaData.map((manga) => (
                    <SwiperSlide key={manga.id}>
                        <Mangacard
                            id={manga.id}
                            title={manga.title}
                            type="vertical-manga-card"
                            link={manga.link}
                            image={manga.image}
                            assessment={manga.assessment}
                            tags={manga.tags}
                            likes={manga.likes}
                            views={manga.views}
                            genre={manga.genre}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
    );
};

export default TopManga;