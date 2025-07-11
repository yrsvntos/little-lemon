import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Reservation from "./pages/Booking";
import Menu from "./pages/Menu/Menu";

export default function RoutesApp(){
    return(
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reservation" element={<Reservation />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}