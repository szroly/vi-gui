import axios, { AxiosInstance } from 'axios';

const instance = (jwt: string | null): AxiosInstance =>
  axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_HOST,
    baseURL: 'http://localhost:2000',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });



export default instance;
