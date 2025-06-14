import axios from 'axios';

const peepaClient = axios.create({
  baseURL: import.meta.env.VITE_PEEPA_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
});

export default peepaClient;
