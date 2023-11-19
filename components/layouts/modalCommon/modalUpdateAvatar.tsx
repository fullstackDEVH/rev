"use client";

import { BtnCommon } from "@/components";
import Modal from "./modal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeModalType, setModalType } from "@/redux/slices/modalSlice";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { uploadAvatar } from "@/utils/proxy";

export default function ModalUpdateAvatar() {
  const [avatar, setAvatar] = useState<any | null>(null);
  const [blob, setBlob] = useState<string | null>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { typeModal } = useAppSelector((state) => state.modal);
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // xử lý người dùng đăng nhập
  const handleUpdateAvatar = async () => {
    if (!currentUser) {
      alert("Bạn hãy đăng nhập trước");
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("avatar", avatar);
      const { data } = await uploadAvatar(currentUser._id, formData);
      //   dispatch(removeModalType());
      //   alert("Thành công");
    } catch (error) {
      console.log("error : ", error);
      alert("thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAvatar(e?.target?.files?.[0]);
    e?.target?.files?.[0] &&
      setBlob(URL.createObjectURL(e?.target?.files?.[0]));
  };

  return (
    <Modal
      isOpen={typeModal === "UPDATE_AVATAR" ? true : false}
      handleCloseModal={() => dispatch(removeModalType())}
      commonStyles="max-w-[700px]"
      title="Chỉnh sửa ảnh đại diện"
    >
      <div className="h-[40vh] flex flex-col">
        {blob ? (
          <div className="w-[80%] h-[60%] relative">
            <Image src={blob} alt="avatar blob" fill />
          </div>
        ) : (
          <>
            <label
              htmlFor="avatar"
              className="bg-[#0000000d] cursor-pointer border border-dashed p-9 flex gap-4 items-center justify-center flex-col"
            >
              <Image src="/upload.svg" width={60} height={60} alt="upload" />
              <p className="text-[#6c757d] font-medium text-lg">
                Chọn ảnh để cập nhật avatar
              </p>
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="hidden"
              onChange={handleImageChange}
            />
          </>
        )}

        <div className="w-full mt-auto text-right cursor-pointer flex gap-3 justify-end">
          {/* <div className="p-3 font-semibold rounded-xl text-xl text-primary hover:bg-slate-400">
            {avatar ? "Huỷ" : "Thoát"}
          </div> */}
          <div
            className="p-3 font-semibold rounded-xl text-xl text-primary hover:bg-slate-400"
            onClick={handleUpdateAvatar}
          >
            Cập nhât
          </div>
        </div>
      </div>
    </Modal>
  );
}
