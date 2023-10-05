import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ListOfHotels } from "./components/hotelReservation/hotel";
import { Reserv } from "./components/hotelReservation/reserv";
import { Login } from "./components/hotelReservation/login";
import { Home } from "./components/hotelReservation/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<ListOfHotels />} />
        <Route path="/reserv" element={<Reserv />} />
      </Routes>
    </BrowserRouter>
  );
}
