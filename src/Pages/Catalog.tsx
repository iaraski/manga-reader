import Select from "react-select";
import Mangacard from "../Components/Mainpart/Mangacards.tsx";
import {fakeMangaData} from "../Data/Data.tsx";



export default function Catalog() {
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
    ];

    return (
        <section className="Catalog">
            <div className="Catalog__manga-cards">
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
                    />
                ))}
            </div>
            <div className="Catalog__filter">
                <div className="Catalog__filter-header">
                    <span>Фильтры</span>
                    <button className="Catalog__button">ОЧИСТИТЬ</button>
                </div>
                <div className="Catalog__filter-section">
                    <label>Типы</label>
                    <Select
                        isMulti
                        options={typeOptions}
                        placeholder="Выберите типы"
                    />
                </div>
                <div className="Catalog__filter-section">
                    <label>Жанры</label>
                    <Select
                        isMulti
                        options={genreOptions}
                        placeholder="Выберите жанры"
                    />
                </div>
                <div className="Catalog__filter-section">
                    <label>Статус проекта</label>
                    <Select
                        isMulti
                        options={statusOptions}
                        placeholder="Выберите статус"
                    />
                </div>
                <div className="Catalog__filter-section">
                    <label>Год выпуска</label>
                    <div className="range-inputs">
                        <input type="number" placeholder="От" />
                        <input type="number" placeholder="До" />
                    </div>
                </div>
            </div>
        </section>
    );
}
