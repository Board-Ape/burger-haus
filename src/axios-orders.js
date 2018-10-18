import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-haus.firebaseio.com'
});

export default instance;