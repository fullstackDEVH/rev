"use client";

import CardFoodStore from "@/components/commons/cardFoodStore";
import CardOutstanding from "@/components/commons/cardOutstanding";
import CardUserOutstanding from "@/components/commons/cardUserStanding";
import Reviews from "@/components/commons/reviews";
import Image from "next/image";

export default function Home() {
  const isLogin = true;
  return (
    <main className="px-px-body flex gap-8 min-h-screen py-8">
      <div className="w-[70%]">
        {/* banner */}
        <div className="relative h-[350px] rounded-xl overflow-hidden">
          <Image
            src="/banner-main.png"
            alt="banner top"
            fill
            className="object-cover"
          />
        </div>

        {/* tags */}
        <div className="py-6">
          {/* heading */}
          <div className="flex item-center justify-between mb-4">
            <h4 className="text-txt-second font-semibold text-2xl">
              Dành cho bạn
            </h4>
            <p className="text-txt-second text-xl font-medium cursor-pointer transition-all hover:text-second">
              Xem thêm
            </p>
          </div>

          {/* lisst store by */}
          <div className="grid grid-cols-3 gap-4">
            <CardFoodStore />
            <CardFoodStore />
            <CardFoodStore />
          </div>
        </div>

        {/* posts review */}
        <Reviews />
      </div>

      <div className="w-[30%]">
        {/* user */}
        <div className="bg-white rounded-xl p-4 shadow-lg">
          {isLogin ? (
            <div>
              <div className="flex gap-3">
                <div className="relative h-full w-[30%] aspect-[1/1]">
                  <Image
                    src="/banner-main.png"
                    alt="banner"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-txt-primary text-lg">Đỗ Thành Nhân</h4>
                  <p>nhan@gmail.com</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-col gap-4">
              <Image
                src="/star_logo_login.svg"
                alt="star_logo_login"
                width={150}
                height={150}
              />

              <p className="text-xl text-primary font-medium text-center">
                Đăng nhập vào Riviu để cùng nhau ăn khắp nơi chơi khắp chốn bạn
                nhé!
              </p>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="py-3 bg-input font-semibold text-lg rounded-xl text-center cursor-pointer hover:bg-[#e3e5e7] transition-colors">
                  Đăng ký
                </div>
                <div className="py-3 text-second bg-[#fff7f2] font-semibold text-lg rounded-xl text-center cursor-pointer hover:bg-[#ffe7d9] transition-colors">
                  Đăng nhập
                </div>
              </div>
            </div>
          )}
        </div>

        {/* store outstanding */}
        <div className="bg-white rounded-xl p-4 shadow-lg mt-6">
          <h2 className="text-xl text-txt-second font-semibold py-3">
            Địa điểm nổi bật
          </h2>

          <div className="border-t border-[#f4f5f8] py-2 grid grid-cols-1 gap-4">
            <CardOutstanding />
            <CardOutstanding />
            <CardOutstanding />
          </div>
        </div>

        {/* users outstanding */}
        <div className="bg-white rounded-xl p-4 shadow-lg mt-6">
          <h2 className="text-xl text-txt-second font-semibold py-3">
            Tài khoản nổi bật
          </h2>

          <div className="border-t border-[#f4f5f8] py-2 grid grid-cols-1 gap-4">
            <CardUserOutstanding />
            <CardUserOutstanding />
            <CardUserOutstanding />
          </div>
        </div>
      </div>
    </main>
  );
}
