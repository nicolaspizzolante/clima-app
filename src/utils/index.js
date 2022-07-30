import axios from 'axios';

const getWeather = async (city) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=ba287d134d4c4df4b22184443222907&q=${city}`);
    return response;
}

export {
    getWeather
} 