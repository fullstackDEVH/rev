export interface IUser {
  _id: string;
  phone_number: string;
  name: string;
  email: string;
  role: string;
  verify_otp: false;
  avatar: string;
}

export interface ICreateStore {
  name: string;
  slogan: string;
  cuisine_national: string;
  open_time: string;
  close_time: string;
  address: string;
  owner: string; // Đảm bảo rằng bạn có ID của chủ cửa hàng
  images?: any;
  phone_number: string;
  price_highest: string;
  price_lowest: string;
  province: string;
}
export interface IReadStore extends ICreateStore {
  _id: string;
}

export interface ICreateReview {
  author: string; // id author
  store: string; // id store
  content: string;
  images: FileList;
  rating: {
    serve: number;
    price: number;
    space: number;
    smell: number;
    food_safety: number;
  };
}
