import { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
    const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const logo_path = 'https://img.icons8.com/?size=100&id=g3loEKKtGmK2&format=png&color=000000';
    const search_path = 'https://img.icons8.com/?size=100&id=132&format=png&color=000000';
    const account_path = 'https://img.icons8.com/?size=100&id=20137&format=png&color=000000';
    const create_path = 'https://img.icons8.com/?size=100&id=6697&format=png&color=000000'

    const toggleSearchBar = (): void => {
        setIsSearchVisible(!isSearchVisible);
    };

    // useEffect для отслеживания кликов вне строки поиска
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
                setIsSearchVisible(false); // скрыть строку поиска, если клик вне поля
            }
        };

        if (isSearchVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchVisible]);

    return (
        <section className="header">
            <div className="logotip">
                <Link to="">
                <p>
                    <img className="logo" src={logo_path} alt="logo" /> angaMania
                </p>
                </Link>

                <Link to="/catalog">Каталог</Link>
                <Link to="/top">Топ</Link>
                {!isSearchVisible ? (
                    <a onClick={toggleSearchBar}>
                        <img className="search" alt="search" src={search_path} />
                    </a>
                ) : (
                    <input
                        ref={searchInputRef}
                        type="text"
                        className={`search-input ${isSearchVisible ? 'show' : ''}`}
                        placeholder="Поиск..."
                    />
                )}
            </div>
            <div className="personal_account">
                <Link to ="/Auth">
                    <img className="account_logo" alt="account logo" src={account_path}/>
                </Link>
                <Link to="/create">
                    <img className="create_manga" alt="create manga" src={create_path}/>
                </Link>
            </div>
        </section>
    );
}
