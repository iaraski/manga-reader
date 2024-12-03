import React from "react";
import { MangaCardProps } from "../../Interfaces.tsx";
import "./Mangacards.css";

const Mangacard: React.FC<MangaCardProps> = ({ id, type, image, title, assessment, views, likes, link, genre, tags }) => {
    if (type === "horizontal-manga-card") {
        return (

            <div className="horizontal-manga-card">
                <span className="card-number">{id}</span> {/* Нумерация карточки */}
                <a href={link}>
                    <img src={image} alt=""/>
                    <div className="card-info">
                        <p>{genre}</p>
                        <p>{title}</p>
                        <p>{tags.slice(0, 3)}</p>
                        <div className="manga-stats">
                            <p>
                                <img
                                    src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                                    alt=""
                                />
                                : {assessment}
                            </p>
                            <p>
                                <img
                                    src="https://img.icons8.com/?size=100&id=19411&format=png&color=000000"
                                    alt=""
                                />
                                : {likes}
                            </p>
                            <p>
                                <img
                                    src="https://img.icons8.com/?size=100&id=7840&format=png&color=000000"
                                    alt=""
                                />
                                : {views}
                            </p>
                        </div>
                    </div>
                </a>
            </div>

        );
    }
    if (type === "vertical-manga-card") {
        return (
            <div className={type}>
                <a href={link}>
                    <img src={image} alt=""/>
                    <p className="p2">
                        <span className="p1">{genre}</span>
                        <span className="p3">{assessment}
                            <img
                                src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                                alt="Звезда"
                            />
                        </span>
                    </p>
                    <p>{title}</p>
                </a>
            </div>
        );
    }
    return null; // На случай, если тип не указан
};

export default Mangacard;
