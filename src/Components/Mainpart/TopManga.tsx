import React, { useRef, useState } from "react";
import { fakeMangaData } from "../../Data/Data.tsx";
import Mangacard from "./Mangacards.tsx";
import "./Mangacards.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopManga: React.FC = () => {
    const sliderRef = useRef<Slider>(null);
    const [isDragging, setIsDragging] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8, // Показываем 3 карточки за раз
        slidesToScroll: 4, // Прокручиваем по 3 карточки за раз
        arrows: false, // Полностью убираем стрелки
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Для мобильных устройств показываем одну карточку
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            e.preventDefault();
            // Прокрутка слайдера при движении мыши
            const movementX = e.movementX;
            if (movementX > 0) {
                sliderRef.current?.slickPrev();
            } else if (movementX < 0) {
                sliderRef.current?.slickNext();
            }
        }
    };

    return (
        <div
            className="slider-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <Slider ref={sliderRef} {...settings}>
                {fakeMangaData.map((manga) => (
                    <Mangacard
                        key={manga.id}
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
                ))}
            </Slider>
        </div>
    );
};

export default TopManga;
