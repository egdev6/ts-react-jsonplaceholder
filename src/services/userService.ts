import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface NewUser {
  name: string;
  username: string;
  email: string;
}

export const userService = {
  getAll: async (): Promise<User[]> => {
    const { data } = await api.get<User[]>("/users");
    return data;
  },
  create: async (user: NewUser): Promise<User> => {
    const { data } = await api.post<User>("/users", user);
    return data;
  },
};