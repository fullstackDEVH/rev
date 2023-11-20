import { axiosAuthCookie, axiosAuthCookieMultiData, axiosNonAuth } from "./api";
import { getCookie } from "./common";
import { ICreateComment } from "./interface";

export const getUserById = async (userId: string) => {
  return await axiosAuthCookie.get(`/users/${userId}`);
};

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

export const uploadAvatar = async (userId: string, formData: FormData) => {
  return await axiosAuthCookieMultiData.post(
    `/users/upload/${userId}`,
    formData
  );
};

export const getReviewById = async (reviewId: string) => {
  return await axiosNonAuth.get(`/reviews/${reviewId}/detail`);
};

export const createComment = async (reviewId: string, body: ICreateComment) => {
  return await axiosNonAuth.post(`/comments/${reviewId}`, body);
};

export const getUserReviews = async (userId: string) => {
  return await axiosAuthCookie.get(`/reviews/${userId}/me`);
};

export const getUserStores = async (userId: string) => {
  return await axiosAuthCookie.get(`/stores/${userId}/me`);
};

export const getTopStores = async () => {
  return await axiosAuthCookie.get(`/stores/top`);
};

export const getTopUsersReviews = async () => {
  return await axiosAuthCookie.get(`/reviews/top/users`);
};
