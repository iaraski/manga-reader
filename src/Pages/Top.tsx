    import {useEffect, useRef, useState} from "react";
import { fakeMangaData } from "../Data/Data.tsx";
import Mangacard from "../Components/Mainpart/Mangacards.tsx";

export default function Top() {
        const [activeButton, setActiveButton] = useState("Манга");

    // Создаем refs для каждой кнопки и для линии
        const mangaRef = useRef<HTMLButtonElement>(null);
    const manhwaRef = useRef<HTMLButtonElement>(null);
    const manhuaRef = useRef<HTMLButtonElement>(null);
    const underlineRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    // Обновляем позицию подчеркивания при изменении активной кнопки
    useEffect(() => {
        const getActiveButtonRef = () => {
            switch (activeButton) {
                case "Манга":
                    return mangaRef.current;
                case "Манхва":
                    return manhwaRef.current;
                case "Маньхуа":
                    return manhuaRef.current;
                default:
                    return null;
            }
        };

        const activeElement = getActiveButtonRef();
        if (activeElement && underlineRef.current) {
            underlineRef.current.style.width = `${activeElement.offsetWidth}px`;
            underlineRef.current.style.left = `${activeElement.offsetLeft}px`;
        }
    }, [activeButton]);

    // Устанавливаем начальную позицию линии при монтировании компонента
    useEffect(() => {
        if (mangaRef.current && underlineRef.current) {
            underlineRef.current.style.width = `${mangaRef.current.offsetWidth}px`;
            underlineRef.current.style.left = `${mangaRef.current.offsetLeft}px`;
        }
    }, []); // Запускается только один раз при монтировании


    return (
        <div className="top">
            <div className="top__header">
                <h1>Топ</h1>
                <div className="top__header__buttons">

                    <button
                        ref={mangaRef}
                        className={activeButton === "Манга" ? "active" : ""}
                        onClick={() => handleButtonClick("Манга")}
                    >
                        <p>Манга</p>
                    </button>
                    <button
                        ref={manhwaRef}
                        className={activeButton === "Манхва" ? "active" : ""}
                        onClick={() => handleButtonClick("Манхва")}
                    >
                        <p>Манхва</p>
                    </button>
                    <button
                        ref={manhuaRef}
                        className={activeButton === "Маньхуа" ? "active" : ""}
                        onClick={() => handleButtonClick("Маньхуа")}
                    >
                        <p>Маньхуа</p>
                    </button>
                    {/* Добавляем подчеркивание */}
                    <div className="underline" ref={underlineRef}></div>
                </div>
            </div>
            <div className="top__tags-filter">
                <button>Потные культяпки</button>
                <button>понравится леди</button>
                <button>система</button>
                <button>вторая жизнь</button>
                <button>страшно очень</button>
                <button>битва разумов</button>
                <button>меч и магия</button>
                <button>киберпанк</button>
                <button>Потные культяпки</button>
                <button>понравится леди</button>
                <button>система</button>
                <button>вторая жизнь</button>
                <button>страшно очень</button>
                <button>битва разумов</button>
                <button>меч и магия</button>
                <button>киберпанк</button>
            </div>
            <div className="top__cards">
                {fakeMangaData.map((manga) => (
                    <Mangacard
                        key={manga.id}
                        id={manga.id}
                        type="horizontal-manga-card"
                        image={manga.image}
                        title={manga.title}
                        link={manga.link}
                        genre={manga.genre}
                        assessment={manga.assessment}
                        views={manga.views}
                        likes={manga.likes}
                        tags={manga.tags}
                        numChapters={manga.numChapters}
                        progress={manga.progress}
                        createdDate={manga.createdDate}
                        />
                    ))}
                </div>
            </div>
            );
            }
