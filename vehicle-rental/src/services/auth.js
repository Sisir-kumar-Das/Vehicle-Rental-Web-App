import axios from 'axios';
import { API } from '../backend';

export const userSignup = async (data) => {
  return await axios.post(`${API}/auth/signup`, data);
};

export const userSignin = async (data) => {
  return await axios.post(`${API}/auth/login`, data);
};
