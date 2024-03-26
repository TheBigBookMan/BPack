import { useParams } from "react-router-dom";

const Person = () => {
    const { personId } = useParams();

    console.log(personId);

    return (
        <div>
            <p>Person</p>
        </div>
    );
};

export default Person;
