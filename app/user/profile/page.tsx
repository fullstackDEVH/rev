"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setModalType } from "@/redux/slices/modalSlice";
import { baseURL } from "@/utils/api";
import Image from "next/image";

export default function Profile() {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <div className="py-10 px-px-body">
      <div className="p-[80px] bg-white shadow-xl rounded-xl">
        {/* user infor */}
        <div className="flex item-center gap-8">
          {/* avatar */}
          <div className="relative w-[200px] h-[200px] shadow-md rounded-full">
            <Image
              src={
                currentUser?.avatar
                  ? `${baseURL}/users/avatar/${currentUser?.avatar}`
                  : "/avatar.png"
              }
              alt="avatar"
              fill
              className="rounded-full object-cover"
            />

            <div
              className="block absolute bottom-0 left-0 rounded-xl bg-[#6c757d] z-10 font-medium cursor-pointer text-white p-2 hover:opacity-90 transition-all"
              onClick={() => dispatch(setModalType("UPDATE_AVATAR"))}
            >
              Chỉnh sửa
            </div>
          </div>
          {/* username */}
          <div className="flex flex-col justify-center gap-2">
            <h4 className="text-2xl text-txt-primary font-semibold">
              Đỗ Thành Nhân
            </h4>
            <p className="text-lg text-txt-second font-medium">
              nhan@gmail.com
            </p>
          </div>
        </div>

        {/* kiệt kê */}
        <div className="flex gap-4 my-6">
          <div className="text-lg">
            <span className="font-medium text-xl">1</span> bài viết
          </div>
          <div className="text-lg">
            <span className="font-medium text-xl">0</span> người theo dõi
          </div>
          <div className="text-lg">
            <span className="font-medium text-xl">0</span> đang theo dõi
          </div>
        </div>

        {/* tags */}
        <div className="py-4 flex justify-center items-center">
              
        </div>
      </div>
    </div>
  );
}