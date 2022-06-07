import axios from 'axios';

const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

let baseURL = "http://localhost:8000/api/";

if (!development)
    //TODO: agregar el URL correcto del servidor
    baseURL = "https://basicemployeedirectorywebapi.azurewebsites.net/api"

export const restApi = axios.create({
    baseURL
});