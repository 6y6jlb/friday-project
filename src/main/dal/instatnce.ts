import axios from "axios";


//export const baseURL = 'http://localhost:7542/2.0/'; //local back
export const baseURL = 'https://neko-back.herokuapp.com/2.0'; //remote back

export const instance = axios.create ( {
    baseURL,
    withCredentials: true
} );