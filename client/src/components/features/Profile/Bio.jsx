import { useState } from "react";
import Me from "../../../assets/Me.jpg";
import { MdEdit } from "react-icons/md";
import Popup from "../../common/Elements/Popup";

const Bio = () => {
    const [details, setDetails] = useState();
    const [editProfilePopup, setEditProfilePopup] = useState(false);

    return (
        <div className="flex flex-col">
            <Popup
                closeModal={() => setEditProfilePopup(false)}
                isOpen={editProfilePopup}
                height={5}
            >
                <div className="flex flex-col">
                    <p className="text-white">Edit Profile</p>
                </div>
            </Popup>
            <div className="flex gap-2">
                <img src={Me} className="w-36 rounded-xl" />
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <p className="text-white">Ben Smerd</p>
                            <p className="text-white">Australia</p>
                            <p className="text-white">28 Years</p>
                        </div>
                        <MdEdit
                            onClick={() => setEditProfilePopup(true)}
                            className="text-cyan-500 text-2xl"
                        />
                    </div>
                    <p className="text-slate-300 text-sm w-full max-h-[50px] overflow-y-auto">
                        I am traveling because I enjoy meeting new people from
                        around the world. I am traveling because I enjoy meeting
                        new people from around the world. I am traveling because
                        I enjoy meeting new people from around the world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bio;
