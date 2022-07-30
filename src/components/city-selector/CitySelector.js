
import "./CitySelector.css";

function CitySelector(props) {
    return (
        <div className="City-selector">
            <select onChange={props.handleChange}>
                <option value="">Seleciona una ciudad</option>
                <option value="La Plata">La Plata</option>
                <option value="Santiago">Santiago</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Bogotá">Bogotá</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
            </select>
        </div>
    );
}

export default CitySelector;