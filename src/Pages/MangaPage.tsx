import { useLocation } from "react-router-dom";
import { fakeMangaData } from "../Data/Data.tsx";
import {RefObject, useEffect, useRef, useState} from "react";

export default function MangaPage() {
    const location = useLocation();
    const currentPath = location.pathname;

    // Находим мангу по link
    const manga = fakeMangaData.find((item) => item.link === currentPath);

    // Хуки должны вызываться всегда, независимо от условий
    const [activeButton, setActiveButton] = useState("Описание");
    const [activeInfo, setActiveInfo] = useState("Описание")


    const descriptionRef:RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);
    const chaptersRef:RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);
    const underlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getActiveButtonRef = () => {
            switch (activeButton) {
                case "Описание":
                    return descriptionRef.current;
                case "Главы":
                    return chaptersRef.current;
            }
        };

        const activeElement = getActiveButtonRef();
        if (activeElement && underlineRef.current) {
            underlineRef.current.style.width = `${activeElement.offsetWidth}px`;
            underlineRef.current.style.left = `${activeElement.offsetLeft}px`;
        }
    }, [activeButton]);

    useEffect(() => {
        if (descriptionRef.current && underlineRef.current) {
            underlineRef.current.style.width = `${descriptionRef.current.offsetWidth}px`;
            underlineRef.current.style.left = `${descriptionRef.current.offsetLeft}px`;
        }
    }, []);

    // Если манга не найдена, показываем страницу 404
    if (!manga) {
        return (
            <div className="not-found">
                <h1>Страница не найдена</h1>
            </div>
        );
    }

    const bg_style = {
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url(${manga.image}) no-repeat center top`, // Динамический фон
        backgroundSize: "cover", // Масштабирует изображение под контейнер
        overflow: "hidden", // Убираем лишние элементы за пределами контейнера
    };

    const handleButtonClick = (buttonName: string, ) => {
        setActiveButton(buttonName);
        setActiveInfo(buttonName)
    };

    return (
        <div className="MangaPage" style={bg_style}>
            <div className="MangaPage__card">
                <img src={manga.image} alt="" />
                <button>
                    Читать
                </button>
                <button>
                    Добавить в закладки
                </button>
            </div>
            <div className="MangaPage__Info">
                <p>{manga.genre + " " + manga.createdDate}</p>
                <h2>{manga.title}</h2>
                <div className="MangaPage__stats">
                    <div className="MangaPage__stats__stat">
                        <p>Глав</p>
                        <p style={{color: "black"}}>{manga.numChapters}</p>
                    </div>
                    <div className="MangaPage__stats__stat">
                        <p>Сохранено</p>
                        <div>
                            <img
                                src="https://img.icons8.com/windows/32/filled-bookmark-ribbon.png"
                                alt=""
                            />
                            <p>{manga.createdDate}</p>
                        </div>
                    </div>
                    <div className="MangaPage__stats__stat">
                        <p>Лайков</p>
                        <div>
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/filled-like.png"
                                alt=""
                            />
                            <p>{manga.likes}</p>
                        </div>
                    </div>
                    <div className="MangaPage__stats__stat">
                        <p>Просмотров</p>
                        <div>
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/filled-like.png"
                                alt=""
                            />
                            <p>{manga.views}</p>
                        </div>
                    </div>
                    <div className="MangaPage__stats__stat">
                        <p>Статус</p>
                        <div>{manga.status}</div>
                    </div>
                </div>
                <div className="MangaPage__rate">
                    <span>
                        {manga.assessment}/10{" "}
                        <img
                            src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                            alt=""
                        />
                    </span>
                    <button>оценить</button>
                </div>
                <div className="MangaPage__Navigation">
                    <button
                        ref={descriptionRef}
                        onClick={() => handleButtonClick("Описание")}
                        className={activeButton === "Описание" ? "active" : ""}
                    >Описание
                    </button>
                    <button
                        ref={chaptersRef}
                        onClick={() => handleButtonClick("Главы")}
                        className={activeButton === "Главы" ? "active" : ""}
                    >Главы
                    </button>
                    <div className="underline" ref={underlineRef}></div>

                </div>
                <div className="MangaPage__Content">
                    {activeInfo === "Описание" && (
                        <div>
                            <p>{manga.description}</p>
                        </div>
                    )}
                    {activeInfo === "Главы" && (
                        <div>
                            <ul>
                                {Array.from({length: manga.numChapters}, (_, index) => (
                                    <li key={index}>Глава {index + 1}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}