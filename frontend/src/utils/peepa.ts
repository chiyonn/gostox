import axios from 'axios';

const KEEPATIME_OFFSET = 21564000;

export const keepaMinutesToDate = (minutes: number): string => {
  const millis = (minutes + KEEPATIME_OFFSET) * 60_000;
  return new Date(millis).toISOString().split('T')[0];
};

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
