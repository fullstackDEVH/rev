import { axiosNonAuth } from "./api";

export const userLogin = async (email: string, password: string) => {
  return await axiosNonAuth.post("/users/sign-in", {
    email,
    password,
  });
};

export const userSignUpApi = async (
  email: string,
  password: string,
  name: string
) => {
  return await axiosNonAuth.post("/users/sign-up", {
    email,
    password,
    name,
  });
};

export const getStores = async () => {
  return await axiosNonAuth.get("/stores");
};
