import { useLocation } from "react-router-dom";
import { fakeMangaData } from "../Data/Data.tsx";
import {RefObject, useEffect, useRef, useState} from "react";
import Mangacard from "../Components/Mainpart/Mangacards.tsx";
import useMediaQuery from "../hooks/useMediaQuery.tsx";

export default function MangaPage() {
    const location = useLocation();
    const currentPath = location.pathname;

    const isSmallScreen = useMediaQuery("(max-width: 768px)");

    // Находим мангу по link
    const manga = fakeMangaData.find((item) => item.link === currentPath);

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

    if (isSmallScreen){
        return (
            <div className="MangaPage-mobile" style={bg_style}>
                <img className="MangaPage-mobile__card-image" src={manga.image} alt=""/>
                <div className="MangaPage-mobile__info">
                    <div className="MangaPage-mobile__info__title-status">
                        <h1>{manga.title}</h1>
                        <p>{manga.genre} {manga.createdDate}, {manga.status}</p>
                    </div>
                    <div className="MangaPage-mobile__stats">
                        <div className="MangaPage-mobile__stats__stat">
                            <span>Рейтинг</span>
                            <div className="MangaPage-mobile__stats__stat-img">
                                <span>{manga.assessment}</span>
                                <img className="MangaPage-mobile__logo"
                                     src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                                     alt=""/>
                            </div>
                        </div>
                        <div className="MangaPage-mobile__stats__stat">
                            <span>Глав</span>
                            <div className="MangaPage-mobile__stats__stat-img">
                                <span>{manga.assessment}</span>
                                <img className="MangaPage-mobile__logo"
                                     src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                                     alt=""/>
                            </div>
                        </div>
                        <div className="MangaPage-mobile__stats__stat">
                            <span>Лайков</span>
                            <div className="MangaPage-mobile__stats__stat-img">
                                <span>{manga.assessment}</span>
                                <img className="MangaPage-mobile__logo"
                                     src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                                     alt=""/>
                            </div>
                        </div>
                        <div className="MangaPage-mobile__stats__stat">
                            <span>В закладках</span>
                            <div className="MangaPage-mobile__stats__stat-img">
                                <span>{manga.assessment}</span>
                                <img className="MangaPage-mobile__logo"
                                     src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="MangaPage-mobile__navigation">
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
                        <div className="mobile_underline" ref={underlineRef}></div>
                    </div>
                    <div className="MangaPage-mobile__DescriptionAndChapters">
                        {activeInfo === "Описание" && (
                            <div>
                                <p>{manga.description}</p>
                            </div>
                        )}

                            {activeInfo === "Главы" && (
                                <div>
                                    <ul>
                                        {Array.from({length: manga.numChapters}, (_, index) => (
                                            <div className="MangaPage-mobile__ChapterNum" key={index}>
                                                <p>{index + 1} глава</p>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="MangaPage" style={bg_style}>
                <div className="MangaPage__card">
                    <img src={manga.image} alt=""/>
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
                        <div className="MangaPage__DescriptionAndChapters">
                            {activeInfo === "Описание" && (
                                <div>
                                    <p>{manga.description}</p>
                                </div>
                            )}
                            {activeInfo === "Главы" && (
                                <div>
                                    <ul>
                                        {Array.from({length: manga.numChapters}, (_, index) => (
                                            <div className="MangaPage__ChapterNum" key={index}>
                                                <p>{index+1} глава</p>
                                                <div className="MangaPage__ChapterNum__likes"></div>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="MangaPage__MangaCards">
                            {fakeMangaData.slice(0,3).map((manga)=>(
                                <Mangacard
                                    key={manga.id}
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}