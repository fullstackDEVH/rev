"use client";

import Image from "next/image";
import { BtnCommon, UserHeader } from "..";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setModalType } from "@/redux/slices/modalSlice";

export default function Header() {
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div className="px-px-header">
      <div className="flex items-center h-[110px] justify-between">
        <div className="relative w-[120px] h-[80px]">
          <Image src="/logo.png" alt="logo" fill className="object-contain" />
        </div>

        <div className="flex gap-5 h-[50px]">
          {/* input search */}
          <div className="h-[60px] px-4 flex items-center justify-center gap-3 bg-[#f4f5f8] rounded-3xl hover:shadow-lg transition-all">
            <Image
              src="/search_grey.svg"
              alt="search_grey"
              width={24}
              height={24}
            />
            <div className="p-2">
              <input
                type="text"
                className="bg-transparent p-2 h-full outline-none text-lg"
                placeholder="Tìm kiếm địa điểm rì viu."
              />
            </div>
            <div className="text-txt-second text-lg cursor-pointer font-bold">
              Hồ Chí Minh
            </div>
          </div>

          {currentUser?._id ? (
            <>
              <BtnCommon title="Viết Riviu" commonStyles="" />
              <BtnCommon title="Thêm Địa Điểm" commonStyles="" />
              <UserHeader />
            </>
          ) : (
            <BtnCommon
              title="Đăng nhập"
              commonStyles=""
              handleClick={() => dispatch(setModalType("LOGIN"))}
            />
          )}

          {/* btn */}
          <BtnCommon title="Liên hệ" commonStyles="" />
        </div>
      </div>
    </div>
  );
}
