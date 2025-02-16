import Header from "./Components/Header/Header";
import Mainpart from "./Components/Mainpart/Mainpart";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./Pages/Catalog";
import Top from "./Pages/Top";
import Create from "./Pages/Create.tsx";
import Auth from "./Pages/Auth.tsx";
import "./Styles.css"
import Bookmarks from "./Pages/Bookmarks.tsx";
import MangaPage from "./Pages/MangaPage.tsx";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Mainpart />} /> {/* Главная страница */}
                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/Top" element={<Top />} />
                <Route path="/Create" element={<Create/>} />
                <Route path="/Auth" element={<Auth />} />
                <Route path="/Bookmarks" element={<Bookmarks />} />
                <Route path="/:id" element={<MangaPage/>} />
            </Routes>

            <Footer />
        </Router>
    );
}


export default App;
