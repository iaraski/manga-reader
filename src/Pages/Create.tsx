import DescriptionEditor from "../Components/DescriptionEditor.tsx";
import Select from "react-select";


export default function Create() {

    const genreOptions = [
        {label: "Манга", value:"Манга"},
        {label: "Манхва", value:"Манхв  а"},
        {label: "Маньхуа", value:"Маньхуа"},
        {label: "Рукомикс", value:"Рукомикс"},
    ]
    return (
        <form className="Create">
            <div className="Create__img-title content-block">
                <button>
                    <img src="https://robobux.ru/static/nobann200.jpg" alt=""/>
                </button>
                <div className="Create__title">
                    <div className="Create__name1">
                        <h3>Основное название</h3>
                        <input type="text" placeholder="Введите название..."/>
                    </div>
                    <div className="Create__name2">
                        <h3>Второстепенное название</h3>
                        <input type="text" placeholder="Второстепенное название..."/>
                    </div>
                    <div className="Create__name3">
                        <h3>Остальные названия</h3>
                        <div className="Create__note">
                            <p>Указывайте названия через пробел</p>
                        </div>
                        <input type="text" placeholder="Остальные названия"/>
                    </div>
                </div>
            </div>
            <div className="Create__description content-block">
                <DescriptionEditor/>
            </div>
            <div className="Create__Selects content-block">
                <div className="Create__Selects__info">
                    <div>
                        <h3>Тип</h3>
                        <Select classNamePrefix="custom-select" options={genreOptions} placeholder="Выбери тип"/>
                    </div>
                    <div>
                        <h3>Год выпуска</h3>
                        <input type="text" placeholder="Введи год выпуска"/>
                    </div>
                    <div>
                        <h3>Ограничение</h3>
                        <Select classNamePrefix="custom-select" options={genreOptions} placeholder="Ограничение"/>
                    </div>
                </div>
                <div className="Create__Selects__info Create__Selects__info-2">
                    <div >
                        <h3>Категории</h3>
                        <Select classNamePrefix="custom-select" options={genreOptions} placeholder="Выбери теги"/>
                    </div>
                    <div>
                        <h3>Жанры</h3>
                        <Select classNamePrefix="custom-select" options={genreOptions} placeholder="Теги"/>
                    </div>
                </div>
            </div>
        </form>
    );
}
