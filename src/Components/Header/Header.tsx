import { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для бургер-меню
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const logo_path = "https://img.icons8.com/?size=100&id=g3loEKKtGmK2&format=png&color=000000";
    const search_path = "https://img.icons8.com/?size=100&id=132&format=png&color=000000";
    const account_path = "https://img.icons8.com/?size=100&id=20137&format=png&color=000000";
    const create_path = "https://img.icons8.com/?size=100&id=6697&format=png&color=000000";

    const toggleSearchBar = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Убираем строку поиска при клике вне нее
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => { // Указываем тип MouseEvent
            if (
                searchInputRef.current &&
                !searchInputRef.current.contains(event.target as Node)
            ) {
                setIsSearchVisible(false);
            }
        };

        if (isSearchVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSearchVisible]);

    return (
        <section className="header">
            {/* Логотип и кнопки */}
            <div className="logotip">
                <Link to="/">
                    <p>
                        <img className="logo" src={logo_path} alt="logo" />angaMania
                    </p>
                </Link>
                {/* Бургер-меню для мобильных устройств */}
                <div className="burger-menu">
                    <button className="burger" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
                {/* Показываем ссылки только на десктопе */}
                <nav className={`navigation ${isMenuOpen ? "active" : ""}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/catalog">Каталог</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/top">Топ</Link>
                        </li>
                    </ul>
                </nav>
                {/* Поиск */}
                {!isSearchVisible ? (
                    <a onClick={toggleSearchBar}>
                        <img className="search" alt="search" src={search_path} />
                    </a>
                ) : (
                    <input
                        ref={searchInputRef}
                        type="text"
                        className={`search-input ${isSearchVisible ? "show" : ""}`}
                        placeholder="Поиск..."
                    />
                )}
            </div>
            {/* Персональный аккаунт */}
            <div className="personal_account">
                <Link to="/Auth">
                    <img className="account_logo" alt="account logo" src={account_path} />
                </Link>
                <Link to="/create">
                    <img className="create_manga" alt="create manga" src={create_path} />
                </Link>
            </div>
        </section>
    );
}