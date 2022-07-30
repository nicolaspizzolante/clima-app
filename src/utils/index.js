import axios from 'axios';

export const getWeather = async (city) => {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`);
        return response;
    } catch (err) {
        return err.response;
    }
}