import axios from 'axios';

axios.defaults.baseURL = 'https://finance-planner-app-api.onrender.com/api';

export * from './authAPI';
export * from './cashflowPageAPI';
export * from './dynamicAPI';
export * from './planAPI';
export * from './statisticsAPI';
