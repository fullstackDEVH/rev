import { axiosAuthCookie, axiosAuthCookieMultiData, axiosNonAuth } from "./api";
import { getCookie } from "./common";

export const getCurrentUser = async () => {
  const token = getCookie("access_token");
  return await axiosAuthCookie.get("/users/me", {
    headers: {
      token: token,
    },
  });
};

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

export const getStoreById = async (storeId: string) => {
  return await axiosNonAuth.get(`/stores/${storeId}`);
};

export const uploadImagesReview = async (
  reviewId: string,
  formData: FormData
) => {
  return await axiosAuthCookieMultiData.post(
    `/reviews/upload/${reviewId}`,
    formData
  );
};

export const uploadImagesStore = async (
  storeId: string,
  formData: FormData
) => {
  return await axiosAuthCookieMultiData.post(
    `/stores/upload/${storeId}`,
    formData
  );
};
