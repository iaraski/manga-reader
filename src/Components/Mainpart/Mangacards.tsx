import React from "react";
import { MangaCardProps } from "../../Interfaces.tsx";


const Mangacard: React.FC<MangaCardProps> = ({ id, type, image, title, assessment, views, likes, link, genre, tags }) => {
    if (type === "horizontal-manga-card") {
        return (

            <div className="horizontal-manga-card">
                <a href={link}>
                    <img className={type + "__img"} src={image} alt=""/>
                    <div className={type + "__info"}>
                        <p>{genre}</p>
                        <p>{title}</p>
                        <p>{tags.slice(0, 3)}</p>
                        <div className={type + "__stats"}>
                            <p>
                                <img className="icon horizontal-manga-card__icon"
                                    src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                                    alt=""
                                />
                                : {assessment}
                            </p>
                            <p>
                                <img className="icon horizontal-manga-card__icon"
                                    src="https://img.icons8.com/?size=100&id=19411&format=png&color=000000"
                                    alt=""
                                />
                                : {likes}
                            </p>
                            <p>
                                <img className="icon horizontal-manga-card__icon"
                                    src="https://img.icons8.com/?size=100&id=7840&format=png&color=000000"
                                    alt=""
                                />
                                : {views}
                            </p>
                        </div>
                    </div>
                </a>
                <div className="card">{id}</div>
            </div>

        );
    }
    if (type === "vertical-manga-card") {
        return (
            <div className={type}>
                <a href={link}>
                    <img className={type + "__img"} src={image} alt=""/>
                    <p className={type + "__info"}>
                        <p>{genre + "  "}{assessment}
                            <img
                                className="icon vertical-manga-card__icon"
                                src="https://img.icons8.com/ios-filled/50/737373/star--v1.png" alt=""/>
                        </p>
                    </p>
                    <p>
                        {title.length > 20 ? title.slice(0, 19) + "..." : title}
                    </p>
                </a>
            </div>
        );
    }
    return null;
};

export default Mangacard;
