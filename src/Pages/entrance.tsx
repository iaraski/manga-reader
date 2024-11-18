import {useState} from "react";


export default function Entrance(){

        const [isRegister, setIsRegister] = useState(true);

        const handleToggle = () => {
            setIsRegister(!isRegister);
        };
    return(
        <div className="toggle-container">
            <span className={isRegister ? 'active' : ''}>Регистрация</span>
                <div className="toggle-switch" onClick={handleToggle}>
                        <div className={`toggle-button ${isRegister ? 'left' : 'right'}`}/>
                </div>
            <span className={!isRegister ? 'active' : ''}>Вход</span>
        </div>
    )
}