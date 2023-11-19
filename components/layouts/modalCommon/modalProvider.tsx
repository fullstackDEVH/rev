"use client";

import { useAppSelector } from "@/redux/hooks";
import { TYPE_MODAL } from "@/redux/slices/modalSlice";
import { Portal } from "./portal";
import ModalLogin from "./modalLogin";
import ModalSignUp from "./modalSignUp";
import ModalStore from "./modalStore";
import ModalUpdateAvatar from "./modalUpdateAvatar";

export default function ModalProvider() {
  const { typeModal } = useAppSelector((state) => state.modal);

  const modalComponents: Record<TYPE_MODAL, React.ReactNode> = {
    LOGIN: <ModalLogin />,
    SIGN_UP: <ModalSignUp />,
    CREATE_STORE: <ModalStore />,
    UPDATE_AVATAR: <ModalUpdateAvatar />,
  };

  return typeModal ? <Portal>{modalComponents[typeModal]}</Portal> : null;
}
