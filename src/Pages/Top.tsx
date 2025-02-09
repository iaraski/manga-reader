import { useState } from "react";
import { fakeMangaData } from "../Data/Data.tsx";
import Mangacard from "../Components/Mainpart/Mangacards.tsx";

export default function Top() {
    const [activeButton, setActiveButton] = useState("Манга"); // Состояние для активной кнопки

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="top">
            <div className="top-header">
                <h2>Топ</h2>
                <button
                    className={activeButton === "Манга" ? "active" : ""}
                    onClick={() => handleButtonClick("Манга")}
                >
                    Манга
                </button>
                <button
                    className={activeButton === "Манхва" ? "active" : ""}
                    onClick={() => handleButtonClick("Манхва")}
                >
                    Манхва
                </button>
                <button
                    className={activeButton === "Маньхуа" ? "active" : ""}
                    onClick={() => handleButtonClick("Маньхуа")}
                >
                    Маньхуа
                </button>
            </div>
            <div className="tags-filter">
                <button>Потные культяпки</button>
                <button>понравится леди</button>
                <button>система</button>
                <button>вторая жизнь</button>
                <button>страшно очень</button>
                <button>битва разумов</button>
                <button>меч и магия</button>
                <button>киберпанк</button>
            </div>
            <div className="cards">
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
                    />
                ))}
            </div>
        </div>
    );
}
