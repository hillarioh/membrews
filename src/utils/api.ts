import axios from "axios";

// const baseUrl = "https://member-management-backend.vercel.app/users";
const baseUrl = "http://127.0.0.1:3000";

export const getUsers = async () => {
  return axios.get(baseUrl).then((res) => res.data);
};

export const loginUser = async (values: {
  email: string;
  password: string;
}) => {
  return axios.post(`${baseUrl}/users/login`, values).then((res) => res.data);
};

export const registerUser = async (values: {
  username: string;
  email: string;
  password: string;
  roleId: string;
}) => {
  return axios.post(`${baseUrl}/users`, values).then((res) => res.data);
};

//roles
export const getRoles = async () => {
  return axios.get(`${baseUrl}/roles`).then((res) => res.data);
};

export const getMembers = async () => {
  return axios.get(`${baseUrl}/members`).then((res) => res.data);
};

export const createMember = async (data: {
  token: string | null;
  values: {
    userId: string | null;
    firstName: string;
    lastName: string;
    phone: string;
    dateOfBirth: string;
    profilePicture?: string | undefined;
  };
}) => {
  return axios
    .post(`${baseUrl}/members`, data.values, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    })
    .then((res) => res.data);
};

export const updateMember = async (values: {
  id: string;
  name: string;
  email: string;
  role: string;
  profile: { avatar: string };
  dateOfBirth: string;
}) => {
  return axios
    .put(`${baseUrl}/members/${values.id}`, values)
    .then((res) => res.data);
};

export const deleteMember = async (id: string) => {
  return axios.delete(`${baseUrl}/members/${id}`).then((res) => res.data);
};

export const getMemberById = async (id: string) => {
  return axios.get(`${baseUrl}/members/${id}`).then((res) => res.data);
};
