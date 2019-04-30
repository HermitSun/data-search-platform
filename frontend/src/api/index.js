import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
    ? 'http://101.132.35.81:3242'
    : 'http://localhost:3242';

