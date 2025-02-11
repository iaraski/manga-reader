import {Link} from "react-router-dom";


export default function Header() {




    return (
        <header>
            <div className="header">
                <nav className="header__navigation">
                    <ul>
                        <Link to="/"><img className="header__logo logo" src="https://pic.rutubelist.ru/user/0f/86/0f86d040139e11694e75fa316e63de8b.jpg" alt=""/></Link>
                        <li><Link to="/Top">Топ</Link></li>
                        <li><Link to="/Catalog">Каталог</Link></li>
                    </ul>
                </nav>
                <nav className="header__navigation header__navigation--2">
                    <ul>
                        <li><Link to="/Create">Добавить</Link></li>
                        <li><Link to="/Bookmarks">Закладки</Link></li>
                        <li><Link to="/Auth">
                            <button className="button header__button" type="button">Авторизация</button>
                        </Link></li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}