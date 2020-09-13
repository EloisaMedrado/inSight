import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:8080/insight/weather'
});

export default Api;
