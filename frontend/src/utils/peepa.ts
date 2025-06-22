import axios from 'axios';

const KEEPATIME_OFFSET = 21564000;

export const keepaMinutesToDate = (minutes: number): string => {
  const millis = (minutes + KEEPATIME_OFFSET) * 60_000;
  return new Date(millis).toISOString().split('T')[0];
};

