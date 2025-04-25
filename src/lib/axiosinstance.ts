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

const getData = async (token: string, url: string) => {
  try {
    const response = await instance(token).get(url);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
};

const sendData = async (token: string, url: string, payload: any) => {
  try {
    const response = await instance(token).post(url, payload);
    return response;
  } catch (error) {
    return error;
  }
}

const updateData = async (token: string, url: string, payload: any) => {
  try {
    const response = await instance(token).put(url, payload);
    return response;
  } catch (error) {
    return error;
  }
}

const deleteData = async (token: string, url: string) => {
  try {
    const response = await instance(token).delete(url);
    return response;
  } catch (error) {
    return error;
  }
}

export { getData, sendData, updateData, deleteData, instance };
