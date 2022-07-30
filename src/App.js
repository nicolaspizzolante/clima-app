import './App.css';
import Card from './components/card/Card';
import CitySelector from './components/city-selector/CitySelector';
import { getWeather } from './utils';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('La Plata');
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
    setLoading(true);
    getAndDisplayWeatherData(city);
  }

  return (
    <div className="App">
      <div className="Main">
        <h1>Clima App</h1>
        <CitySelector handleChange={handleChange} />
        {loading && <p className='loading-p'>Cargando...</p>}
        {data && <Card data={data} handleReload={handleReload} />}
      </div>
    </div>
  );
}

export default App;