import { useParams } from "react-router-dom";

const Chat = () => {
    const { chatId } = useParams();

    console.log(chatId);

    return (
        <div>
            <p>Chat</p>
        </div>
    );
};

export default Chat;
