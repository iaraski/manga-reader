import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel'; // Стили для модуля mousewheel
import { Mousewheel } from 'swiper/modules'; // Импортируем модуль Mousewheel
import "./manga-carusel.css"
import {fakeMangaData} from "../../Data/Data.tsx";






const MangaCarousel: React.FC = () => {
    return (
        <div className="manga-carousel">
            <h2>Популярно сегодня</h2>
            <Swiper
                spaceBetween={10} // Промежуток между карточками
                slidesPerView={8} // Сколько карточек будет видно одновременно
                mousewheel={true} // Включаем прокрутку колесом мыши
                modules={[Mousewheel]} // Подключаем модуль прокрутки
                loop={true} // Зацикливание отключено
            >
                {fakeMangaData.map((manga) => (
                    <SwiperSlide key={manga.id}>
                        <div className="manga-card">
                            <img src={manga.image} alt={manga.title} />
                            <h3>{manga.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MangaCarousel;


