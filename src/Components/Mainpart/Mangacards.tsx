import React from "react";
import { MangaCardProps } from "../../Interfaces.tsx";
import {Link} from "react-router-dom";


const Mangacard: React.FC<MangaCardProps> = ({type, image, title, assessment, views, likes, link, genre, tags, createdDate, progress, numChapters}) => {
    if (type === "horizontal-manga-card") {
        return (
            <Link to={link}>
                <div className="horizontal-manga-card top__horizontal-manga-card">
                    <img
                        className={`${type}__img top__horizontal-manga-card__img`}
                        loading="lazy"
                        src={image}
                        alt=""
                    />
                    <div className={`${type}__info`}>
                        <p>{genre}</p>
                        <h3>{title.length > 20 ? `${title.slice(0, 19)}...` : title}</h3>
                        <p>{tags.slice(0, 3).join(", ")}</p>
                        <ul className={`${type}__stats`}>
                            <li>
                                <img
                                    className="icon horizontal-manga-card__icon"
                                    src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                                    alt=""
                                />
                                {assessment}
                            </li>
                            <li>
                                <img
                                    className="icon horizontal-manga-card__icon"
                                    src="https://img.icons8.com/?size=100&id=19411&format=png&color=000000"
                                    alt=""
                                />
                                    {likes}
                            </li>
                            <li>
                                <img
                                    className="icon horizontal-manga-card__icon"
                                    src="https://img.icons8.com/?size=100&id=7840&format=png&color=000000"
                                    alt=""
                                />
                                {views}
                            </li>
                        </ul>
                    </div>
                </div>
            </Link>
        );
    }
    if (type === "vertical-manga-card") {
        return (
            <Link to={link}>
                <div className={type}>
                    <img className={type + "__img"} loading={"lazy"} src={image} alt=""/>
                    <p className={type + "__info"}>
                        <p>{genre + "  "}{assessment}
                            <img
                                className="icon vertical-manga-card__icon"
                                src="https://img.icons8.com/ios-filled/50/737373/star--v1.png" alt=""/>
                        </p>
                    </p>
                    <p>
                        {title.length > 18 ? title.slice(0, 17) + "..." : title}
                    </p>
                </div>
            </Link>
        );
    }
    if(type == "horizontal-low-info-manga-card"){
        return (
            <Link to={link}>
                <div className={type + " MangaPage__MangaCards__MangaCard"}>
                    <img
                        className={type + "__img img"}
                        srcSet={image}
                        loading={"lazy"}
                        alt=""/>
                    <div className={type + "__info"}>
                        <p> {title.length > 20 ? title.slice(0, 19) + "..." : title}</p>
                        {progress == 0 ? <p className={type + "__type_createdDate"}>{genre} {createdDate}</p> :
                            <p className={type + "__progress"}>Прочитано {progress} из {numChapters} глав</p>}
                    </div>
                </div>
            </Link>
        )
    }
    return null;
};

export default Mangacard;
