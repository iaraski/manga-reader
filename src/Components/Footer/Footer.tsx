import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/about">О нас</a>
                <a href="/terms">Условия использования</a>
                <a href="/privacy">Политика конфиденциальности</a>
                <a href="/contact">Контакты</a>
            </div>
            <p className="footer-text">© 2024 Manga Reader. Все права защищены.</p>
        </footer>
    );
};

export default Footer;
