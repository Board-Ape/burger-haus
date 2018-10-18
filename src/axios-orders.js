import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://react-burger-haus.firebaseapp.com'
});

export default instance;