import  { useState } from "react";
import Select from "react-select";
import Mangacard from "../Components/Mainpart/Mangacards.tsx";
import { fakeMangaData } from "../Data/Data.tsx";
import useMediaQuery from "../hooks/useMediaQuery.tsx";

export default function Catalog() {
    const isSmallScreen = useMediaQuery("(max-width: 768px)");

    const [isFilterVisible, setIsFilterVisible] = useState(false); // Состояние для видимости фильтра

    const typeOptions = [
        { value: "Манга", label: "Манга" },
        { value: "Манхва", label: "Манхва" },
        { value: "Маньхуа", label: "Маньхуа" },
    ];

    const genreOptions = [
        { value: "Боевик", label: "Боевик" },
        { value: "Фэнтези", label: "Фэнтези" },
        { value: "Романтика", label: "Романтика" },
    ];

    const statusOptions = [
        { value: "Завершён", label: "Завершён" },
        { value: "В процессе", label: "В процессе" },
        { value: "Продолжается", label: "Продолжается" },
        { value: "Замарожен", label: "Замарожен" },
    ];

    const tagsOptions = [
        { value: "Алхимия", label: "Алхимия" },
        { value: "Антигерой", label: "Антигерой" },
        { value: "Боги", label: "Боги" },
        { value: "Артефакты", label: "Артефакты" },
        { value: "Бои на мечах", label: "Бои на мечах" },
        { value: "Борьба за власть", label: "Борьба за власть" },
    ];

    return (
        <div className="Catalog">
            <div className="Catalog__manga-cards">
                    {isSmallScreen && (
                        <div className="Catalog__manga-cards__sorting">
                            <button onClick={() => setIsFilterVisible(!isFilterVisible)}>
                                <img className="logo"
                                     src="https://img.icons8.com/ios-filled/50/filter--v1.png"
                                     alt="filter"
                                />
                            </button>
                        </div>
                    )}
                {fakeMangaData.map((manga) => (
                    <Mangacard
                        key={manga.id}
                        id={manga.id}
                        type="vertical-manga-card"
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

                {/* Кнопка для показа фильтра в мобильной версии */}
            </div>

            {/* Фильтр, который появляется поверх карточек */}
            {isSmallScreen && isFilterVisible && (
                <div className="Catalog__mobile-filter-overlay">
                    <form className="Catalog__mobile-filter">
                        <div className="Catalog__filter__header">
                            <span>Фильтры</span>
                            <button
                                className="Catalog__filter__header_button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsFilterVisible(false); // Скрываем фильтр при клике на "ОЧИСТИТЬ"
                                }}
                            >
                                ОЧИСТИТЬ
                            </button>
                        </div>
                        <Select
                            className="Catalog__filter__select"
                            isMulti
                            options={typeOptions}
                            placeholder="Выберите типы"
                        />
                        <Select
                            className="Catalog__filter__select"
                            isMulti
                            options={genreOptions}
                            placeholder="Выберите жанры"
                        />
                        <Select
                            className="Catalog__filter__select"
                            isMulti
                            options={tagsOptions}
                            placeholder="Выберите теги"
                        />
                        <Select
                            className="Catalog__filter__select"
                            isMulti
                            options={statusOptions}
                            placeholder="Выберите статус"
                        />
                        <div className="Catalog__filter__range-inputs">
                            <input type="number" placeholder="От" />
                            <input type="number" placeholder="До" />
                        </div>
                    </form>
                </div>
            )}

            {/* Десктопная версия фильтра */}
            {!isSmallScreen && (
                <form>
                    <div className="Catalog__filter">
                        <div className="Catalog__filter__header">
                            <span>Фильтры</span>
                            <button className="Catalog__filter__header_button">ОЧИСТИТЬ</button>
                        </div>
                        <Select
                            className="Catalog__filter__select"
                            isMulti
                            options={typeOptions}
                            placeholder="Выберите типы"
                        />
                        <Select
                            className="Catalog__filter__select"
                            isMulti
                            options={genreOptions}
                            placeholder="Выберите жанры"
                        />
                        <Select
                            className="Catalog__filter__select"
                            isMulti
                            options={tagsOptions}
                            placeholder="Выберите теги"
                        />
                        <Select
                            className="Catalog__filter__select"
                            isMulti
                            options={statusOptions}
                            placeholder="Выберите статус"
                        />
                        <div className="Catalog__filter__range-inputs">
                            <input type="number" placeholder="От" />
                            <input type="number" placeholder="До" />
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}