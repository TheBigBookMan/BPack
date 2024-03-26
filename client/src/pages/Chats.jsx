import { useState, useEffect } from "react";
import Chat from "../components/features/Chats/Chat";
import { IoArrowBackSharp } from "react-icons/io5";

// ! TEMP
import ME from "../assets/Me.jpg";
import { Link, Route, Routes } from "react-router-dom";

const test = [
    {
        profilePic: ME,
        chatId: "1234",
        name: "Andy Kyriakou",
        date: "12-03-2024",
        time: "15:04",
        message:
            "Have a look at this man ,it is really cool and I think you will really like it, there are a lot of things in this that I think you would really really like and I think you should check it out.",
    },
    {
        profilePic: ME,
        chatId: "5453",
        name: "Ben Smerd",
        date: "12-03-2024",
        time: "15:04",
        message:
            "Have a look at this man ,it is really cool and I think you will really like it, there are a lot of things in this that I think you would really really like and I think you should check it out.",
    },
];

const Chats = () => {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex justify-between items-center px-2">
                <p className="text-xl font-bold text-cyan-300">Chats</p>
                {chatOpen && (
                    <Link to="/chats" onClick={() => setChatOpen(false)}>
                        <IoArrowBackSharp className="cursor-pointer text-2xl bg-cyan-500 rounded-lg hover:bg-cyan-300" />
                    </Link>
                )}
            </div>
            {chatOpen ? (
                <div className="flex flex-col">
                    <Routes>
                        <Route path=":chatId" element={<Chat />} />
                    </Routes>
                </div>
            ) : (
                <ul className="flex flex-col gap-1 h-full w-full overflow-y-auto">
                    {test.map((t) => (
                        <Link
                            key={t.chatId}
                            onClick={() => setChatOpen(true)}
                            to={`/chats/${t.chatId}`}
                            className="border-2 border-slate-800 rounded-lg w-full h-[80px] gap-2 flex p-1 hover:bg-slate-800 transition"
                        >
                            <img
                                src={t.profilePic}
                                className="w-20 rounded-lg"
                            />
                            <div className="flex flex-col h-full">
                                <div className="flex gap-2">
                                    <p className="text-sm text-cyan-300">
                                        {t.name}
                                    </p>
                                    <p className="text-sm text-white">
                                        {t.date}
                                    </p>
                                    <p className="text-sm text-white">
                                        {t.time}
                                    </p>
                                </div>
                                <p className="h-full w-full text-white overflow-y-hidden text-sm">
                                    {t.message}
                                </p>
                            </div>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Chats;
