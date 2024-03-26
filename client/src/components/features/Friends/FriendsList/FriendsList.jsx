import ME from "../../../../assets/Me.jpg";
import { Link } from "react-router-dom";

// TODO could have the place that you became friends with them on there as well as a cool uniqie feature

const test = [
    {
        name: "Andy Kyriakou",
        friendsCount: 1234,
        met: "Aarhus, Denmark",
        personId: 333,
    },
    {
        name: "Ben Smerd",
        friendsCount: 1543,
        met: "Adelaide, Australia",
        personId: 987,
    },
];

const FriendsList = () => {
    return (
        <ul className="flex flex-col gap-2 w-full h-full overflow-y-auto">
            {test.map((t) => (
                <Link
                    to={`/person/${t.personId}`}
                    className="border-2 border-cyan-500 p-1 h-[80px] w-full rounded-lg flex text-sm text-cyan-500 gap-2"
                    key={t.personId}
                >
                    <img src={ME} className="w-20 rounded-lg" />
                    <div className="flex flex-col">
                        <p>{t.name}</p>
                        <p>Friends: {t.friendsCount}</p>
                        <p>Met In: {t.met}</p>
                    </div>
                </Link>
            ))}
        </ul>
    );
};

export default FriendsList;
