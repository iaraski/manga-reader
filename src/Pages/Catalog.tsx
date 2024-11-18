import "./Catalog.css";

import React from "react";
import {fakeMangaData} from "../Data/Data.tsx";


export const MangaCard: React.FC<{ title: string; image: string }> = ({ title, image }) => {
    return (
        <div className="catalog-manga-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};





export default function Catalog() {


    return (
        <section>
            <h2 className="catalog-h2">Каталог</h2>
            <div className="catalog">
                <div className="catalog-mainpart">
                    {fakeMangaData.map((manga) => (
                        <MangaCard key={manga.id} title={manga.title} image={manga.image} />
                    ))}
                </div>
                <div className="catalog-filter">
                    <h3>Фильтры</h3>
                    <button className="clear-button">Очистить</button>
                    <div className="filter-select">
                        <label>Типы</label>
                        <select>
                            <option>Все</option>
                            <option>Манга</option>
                            <option>Манхва</option>
                            <option>Манхуа</option>
                        </select>
                    </div>
                    <div className="filter-select">
                        <label>Жанры</label>
                        <select>
                            <option>Все</option>
                            <option>Экшен</option>
                            <option>Романтика</option>
                            <option>Фэнтези</option>
                        </select>
                    </div>
                    <div className="filter-select">
                        <label>Теги</label>
                        <select>
                            <option>Все</option>
                            <option>Приключения</option>
                            <option>Мистика</option>
                        </select>
                    </div>
                    <div className="filter-select">
                        <label>Статус проекта</label>
                        <select>
                            <option>Все</option>
                            <option>Завершено</option>
                            <option>Выпускается</option>
                        </select>
                    </div>
                    <div className="filter-select">
                        <label>Год выпуска</label>
                        <div className="year-filter">
                            <input type="number" placeholder="От" />
                            <input type="number" placeholder="До" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
