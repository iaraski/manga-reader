import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";// Импортируем необходимые модули
import Mangacard from "./Mangacards.tsx";
import "swiper/css"; // Основной CSS для Swiper
import "swiper/css/pagination"; // CSS для пагинации
import "swiper/css/navigation";
import {fakeMangaData} from "../../Data/Data.tsx"; // CSS для навигации

export default function Mainpart() {
    const settings = {
        slidesPerView: 4, // Количество видимых слайдов (по умолчанию)
        spaceBetween: 0, // Пробел между слайдами
        loop: true, // Циклический режим
        speed: 500, // Скорость анимации
        modules: [Navigation], // Подключаем модули
        navigation: true,
        slidersPerGroup:8,// Включаем навигацию
        pagination: { clickable: true }, // Добавляем пагинацию
        breakpoints: {
            // Адаптивность для разных размеров экрана
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidersPerGroup:1,

            },
            425: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidersPerGroup:1
            },
            600: {
                slidesPerView: 4,
                spaceBetween: 10,
                slidersPerGroup:2,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 10,
                slidersPerGroup:3,

            },
            1024: {
                slidesPerView: 8,
                spaceBetween: 10,
                slidersPerGroup:4,

            },
            1440: {
                slidesPerView: 10,
                spaceBetween: 10,
                slidersPerGroup:4,

            },
        },
    };
    const settings1 = {
        slidesPerView: 4, // Количество видимых слайдов (по умолчанию)
        spaceBetween: 0, // Пробел между слайдами
        loop: true, // Циклический режим
        speed: 500, // Скорость анимации
        modules: [Navigation], // Подключаем модули
        navigation: true,
        slidersPerGroup:8,// Включаем навигацию
        pagination: { clickable: true }, // Добавляем пагинацию
        breakpoints: {
            // Адаптивность для разных размеров экрана
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidersPerGroup:1,

            },
            425: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidersPerGroup:1
            },
            600: {
                slidesPerView: 4,
                spaceBetween: 10,
                slidersPerGroup:2,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 10,
                slidersPerGroup:3,

            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 10,
                slidersPerGroup:4,

            },
            1440: {
                slidesPerView: 8,
                spaceBetween: 10,
                slidersPerGroup:4,

            },
        },
    };

    return (
        <main className="Mainpart">
            <Swiper {...settings} className="swiper-container ">
                {/* Добавляем карточки манги */}
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
                            progress={manga.progress}
                            createdDate={manga.createdDate}
                            numChapters={manga.numChapters}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="manga-section">
                <h2>Горячие новинки</h2>

                <Swiper {...settings1} className="swiper-container swiper-container-new"
                >
                    {/* Добавляем карточки манги */}
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
                                progress={manga.progress}
                                createdDate={manga.createdDate}
                                numChapters={manga.numChapters}
                                description={''}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <h2>продолжить чтение</h2>
                <Swiper
                    className="swiper-low-info-container"
                    slidesPerView={3}
                    loop={true}
                    pagination={{clickable: true}}
                    modules={[Navigation]}
                    navigation={true}
                >
                    {fakeMangaData.map((manga) => (
                        <SwiperSlide key={manga.id}>
                            <Mangacard
                                id={manga.id}
                                title={manga.title}
                                type="horizontal-low-info-manga-card"
                                link={manga.link}
                                image={manga.image}
                                assessment={manga.assessment}
                                tags={manga.tags}
                                likes={manga.likes}
                                views={manga.views}
                                genre={manga.genre}
                                progress={manga.progress}
                                createdDate={manga.createdDate}
                                numChapters={manga.numChapters}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </main>
    );
}