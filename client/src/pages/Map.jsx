import { useParams } from "react-router-dom";

const Map = () => {
    const { locationName } = useParams();
    console.log(locationName);

    return (
        <div>
            <p>MAp</p>
        </div>
    );
};

export default Map;
