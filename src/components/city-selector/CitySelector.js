import cities from "../../cities";
import "./CitySelector.css";

function CitySelector(props) {
    return (
        <div className="City-selector">
            <select onChange={props.handleChange}>
                <option selected disabled value="">Seleciona una ciudad</option>
                {cities.map((city, idx) => {
                    return <option key={idx} value={city}>{city}</option>
                })}
            </select>
        </div>
    );
}

export default CitySelector;