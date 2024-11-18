import {fakeMangaData} from "../Data/Data.tsx";

import"./Top.css"
import React from "react";


const MangaCard: React.FC<{ title: string; image: string; tags:string[], assessment:number, views:number, likes:number }> = ({ title, image, tags, assessment, views, likes }) => {
    return (
        <div className="Top-manga-card">
            <img src={image} alt={title} />
            <div className="description">
                <h2>{title}</h2>
                <h3>{tags}</h3>
                <div className="Top-stats">
                    <p><img src="https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000"
                            alt=""/>:{assessment} </p>
                    <p><img src="https://img.icons8.com/?size=100&id=crvBZe2bCznG&format=png&color=737373"
                            alt=""/>:{views} </p>
                    <p><img src="https://img.icons8.com/?size=100&id=99981&format=png&color=737373"
                            alt=""/>:{likes} </p>
                </div>
            </div>
        </div>
    );
};

export default function Top() {


    return (
        <section className="Manga-top">
        <div className="Top-manga-navigation">

                <button className="Top-manga-buttons">манхва</button>
                <button className="Top-manga-buttons">маньхуа</button>
                <button className="Top-manga-buttons">манга</button>
            </div>
            <div className="Top-tags">
                <button>все</button>
                <button>понравится леди</button>
                <button>потные культиваторы</button>
                <button>понравится джентельменам</button>
                <button>системки</button>
                <button>школьная жизнь</button>
                <button>исекайнутые</button>
                <button>магические приключения</button>
            </div>
            <div className="Top-manga-cards">
                {fakeMangaData.slice(0, 10).map((manga) => (
                    <MangaCard key={manga.id} title={manga.title} image={manga.image}  assessment={manga.assessment} views={manga.views} likes={manga.likes} tags={manga.tags.slice(0,4)} />
                ))}

            </div>
        </section>
    )
}