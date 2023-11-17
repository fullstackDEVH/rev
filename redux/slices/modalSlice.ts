import { createSlice } from "@reduxjs/toolkit";

export type TYPE_MODAL = "LOGIN" | "SIGN_UP";

interface IInitstates {
  typeModal: TYPE_MODAL | null;
  isOpen: boolean;
}

const initialState: IInitstates = {
  typeModal: "LOGIN",
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    setModalType: (
      state,
      action: {
        type: string;
        payload: TYPE_MODAL;
      }
    ) => {
      //
      state.typeModal = action.payload;
      state.isOpen = true;
    },
    removeModalType: (state) => {
      state.isOpen = false;
      state.typeModal = null;
    },
  },
});

export const { removeModalType, setModalType } = modalSlice.actions;
export default modalSlice.reducer;
