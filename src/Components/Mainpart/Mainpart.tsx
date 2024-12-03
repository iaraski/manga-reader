
import TopManga from "./TopManga.tsx";
import "./Mainpart.css";



export default function Mainpart() {
    return (
        <section className="Mainpart">
            <TopManga/>
            <h2 style={{
                marginLeft: "20px"
            }}>топ новинок</h2>
            <TopManga/>
            <h2>Продолжить чтение</h2>
            <div className="manga-continue">
                <div className="manga-card-continue">
                    <img src="https://via.placeholder.com/250x200" alt="manga1"/>
                    <p>название манги</p>
                    <p>прочитано n из x</p>
                    <button> продолжить чтение</button>
                </div>
                <div className="manga-card-continue">
                    <img src="https://via.placeholder.com/250x200" alt="manga1"/>
                    <p>название манги</p>
                    <p>прочитано n из x</p>
                    <button> продолжить чтение</button>
                </div>
                <div className="manga-card-continue">
                    <img src="https://via.placeholder.com/250x200" alt="manga1"/>
                    <p>название манги</p>
                    <p>прочитано n из x</p>
                    <button> продолжить чтение</button>
                </div>
            </div>
        </section>
    )
}