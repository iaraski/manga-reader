
import "./Tumbler.css";
interface   TumblerProps {
    isRegister: boolean;
    handleToggle: () => void;
}
export default function Tumbler({ isRegister, handleToggle }: TumblerProps) {

    return (
        <div className="toggle-container">
            <div className="toggle-switch" onClick={handleToggle}>
                <div className={`toggle-button ${isRegister ? "left" : "right"}`}>
                    {isRegister ? "Регистрация" : "Вход"}
                </div>
            </div>
        </div>
    );
}
