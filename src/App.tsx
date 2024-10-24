import Header from "./Components/Header/Header";
import './App.css';
import Mainpart from "./Components/Mainpart/Mainpart";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Исправленный импорт
import Catalog from "./Pages/Catalog";
import Top from "./Pages/Top";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/Home" element={<Mainpart />} /> {/* Главная страница */}
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/top" element={<Top />} />
            </Routes>

            <Footer />
        </Router>
    );
}


export default App;
