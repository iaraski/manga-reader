import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery.tsx";

const Header = () => {
    const isSmallScreen = useMediaQuery("(max-width: 768px)");

    if (isSmallScreen) {
        return (
            <header className="header header--small">
                <div className="header__navigation-1">
                    <Link to="/" className="header__logo-link">
                        <img
                            className="header__logo"
                            src="https://pic.rutubelist.ru/user/0f/86/0f86d040139e11694e75fa316e63de8b.jpg"
                            alt="Logo"
                        />
                    </Link>
                    <Link to="/Auth" className="header__auth-button">
                        <button>Войти</button>
                    </Link>
                </div>
                <div className="header__navigation-2">
                    <Link to="/Catalog" className="header__link">
                        Каталог
                    </Link>
                    <Link to="/Top" className="header__link">
                        Топ
                    </Link>
                    <Link to="/Create" className="header__link">
                        Добавить
                    </Link>
                </div>
            </header>
        );
    } else {
        return (
            <header className="header header--large">
                <nav className="header__navigation">
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <Link to="/" className="header__logo-link">
                                <img
                                    className="header__logo"
                                    src="https://pic.rutubelist.ru/user/0f/86/0f86d040139e11694e75fa316e63de8b.jpg"
                                    alt="Logo"
                                />
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/Top" className="header__link">
                                Топ
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/Catalog" className="header__link">
                                Каталог
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className="header__navigation header__navigation--2">
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <Link to="/Create" className="header__link">
                                Добавить
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/Bookmarks" className="header__link">
                                Закладки
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/Auth" className="header__auth-button">
                                <button className="header__button">Войти</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
};

export default Header;