import './App.css';
import Card from './components/card/Card';
import CitySelector from './components/city-selector/CitySelector';
import { getWeather } from './utils';
import { useState } from 'react';
import loadingImg from './assets/loading.gif';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);

  // declaro una funcion que se ejecuta cuando el usuario selecciona una ciudad
  // o cuando presiona el boton actualizar
  // se encarga de obtener la data de la api y setearla en el state para que la utilice el componente Card
  const getAndDisplayWeatherData = async (city) => {
    setLoading(true);

    const response = await getWeather(city);

    setLoading(false);
    setData(response.data);
  }

  // handler que se encargara de manejar 
  // el evento onChange del selector de ciudades
  const handleChange = async (e) => {
    e.preventDefault();
    setCity(e.target.value);
    getAndDisplayWeatherData(e.target.value);
  }

  // handler que se encargara de manejar el evento onClick
  // en el boton actualizar del componente Card
  const handleReload = async () => {
    getAndDisplayWeatherData(city);
  }

  return (
    <div className="App">
      <div className="Main">
        <h1>Clima App</h1>
        <CitySelector handleChange={handleChange} />
        {loading && <img src={loadingImg} alt="cargando..."></img>}
        {data && !loading && <Card data={data} handleReload={handleReload} />}
      </div>
    </div>
  );
}

export default App;