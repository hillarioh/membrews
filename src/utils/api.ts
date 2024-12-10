import axios from "axios";

const baseUrl = "https://member-management-backend.vercel.app/users";

export const getUsers = async () => {
  return axios.get(baseUrl).then((res) => res.data);
};

export const loginUser = async (values: {
  email: string;
  password: string;
}) => {
  return axios.post(`${baseUrl}/login`, values).then((res) => res.data);
};

export const registerUser = async (values: {
  username: string;
  email: string;
  password: string;
}) => {
  return axios.post(baseUrl, values).then((res) => res.data);
};
