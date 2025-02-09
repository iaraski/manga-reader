import { useState, useEffect } from "react";
import Tumbler from "./Tumbler.tsx";


export default function Auth() {
    const [isRegister, setIsRegister] = useState(false);
    const [showMail, setShowMail] = useState(false);

    const handleToggle = () => {
        setIsRegister(!isRegister);
    };

    useEffect(() => {
        if (isRegister) {
            setShowMail(true);
        } else {
            // Убираем класс для анимации скрытия
            setTimeout(() => setShowMail(false), 300); // задержка для анимации исчезновения
        }
    }, [isRegister]);

    return (
        <div className="Auth">
            <Tumbler isRegister={isRegister} handleToggle={handleToggle} />
            <h2>{isRegister ? "Регистрация" : "Вход"}</h2>

            <div className="login">
                <p>{"Логин"}</p>
                <input type="text" placeholder={"Введите логин"} />
            </div>
            <div className="password">
                <p>Пароль</p>
                <input type={isRegister ? "text": "password"} placeholder="Введите пароль" />
            </div>
            {isRegister && (
                <div className={`mail ${showMail ? "show" : ""}`}>
                    <p>Почта</p>
                    <input type="email" placeholder="Введите почту" />
                </div>
            )}
            <button>{isRegister ? "Зарегистрироваться" : "Войти"}</button>
        </div>
    );
}
