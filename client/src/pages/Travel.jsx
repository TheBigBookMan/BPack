import Hostels from "../components/features/Travel/Hostels/Hostels";
import Cities from "../components/features/Travel/Cities/Cities";
import { FaCity } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

const Travel = () => {
    const [travelSelected, setTravelSelected] = useState("Hostels");

    return (
        <div className="h-full w-full flex flex-col ">
            <div className="flex gap-6">
                <Link
                    to="/travel/hostels"
                    onClick={() => setTravelSelected("Hostels")}
                    className={`cursor-pointer flex w-3/6 h-[40px] items-center gap-2 justify-center border-2-cyan-500 bg-cyan-100 rounded-lg ${
                        travelSelected === "Hostels" && "bg-cyan-500 text-white"
                    }`}
                >
                    <FaHouseUser className="text-xl" />
                    <p>Hostels</p>
                </Link>
                <Link
                    to="/travel/cities"
                    onClick={() => setTravelSelected("Cities")}
                    className={`cursor-pointer flex w-3/6 h-[40px] items-center gap-2 justify-center border-2-cyan-500 bg-cyan-100 rounded-lg ${
                        travelSelected === "Cities" && "bg-cyan-500 text-white"
                    }`}
                >
                    <FaCity className="text-xl" />
                    <p>Cities</p>
                </Link>
            </div>
            <div className="flex">
                <Routes>
                    <Route path="/" element={<Hostels />} />
                    <Route path="hostels" element={<Hostels />} />
                    <Route path="cities" element={<Cities />} />
                </Routes>
            </div>
        </div>
    );
};

export default Travel;
