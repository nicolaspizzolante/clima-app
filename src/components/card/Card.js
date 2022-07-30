import "./Card.css";

function Card(props) {
    const { location, current } = props.data;

    return (
        <div className="Card">
            <h2>{location.name}</h2>
            <img src={current.condition.icon} alt="weather-icon" />
            <p className="weather">{current.temp_c}°C / {current.temp_f}°F</p>
            <p className="local-time">Hora local: {location.localtime.substring(10, location.localtime.length)} hs</p>
            <button onClick={props.handleReload}>Actualizar</button>
        </div>
    );
}

export default Card;