import Header from "./Components/Header/Header";
import './App.css';
import Mainpart from "./Components/Mainpart/Mainpart";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./Pages/Catalog";
import Top from "./Pages/Top";
import Create from "./Pages/Create.tsx";
import Entrance from "./Pages/entrance.tsx";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="" element={<Mainpart />} /> {/* Главная страница */}
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/top" element={<Top />} />
                <Route path="/create" element={<Create/>} />
                <Route path="/entrance" element={<Entrance />} />
            </Routes>

            <Footer />
        </Router>
    );
}


export default App;
