"use client";

import { BtnCommon } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { baseURL } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

export default function ReviewDetail() {
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <div className="px-px-body flex py-8 gap-6">
      <div className="w-[67%] bg-white drop-shadow-lg p-10 rounded-xl">
        {/* review detail */}
        <h2 className="text-xl font-semibold">Phạm nguỹen haonf tuần</h2>
        <p className="text-txt-second">
          17:57 ngày 08/01/2022 tại{" "}
          <span className="text-primary"> Spicy Box - Saigon Centre</span>
        </p>

        <div className="flex items-center justify-center w-full relative py-6">
          {/* arrow left */}
          <div className="absolute bg-slate-400 top-1/2 left-[5%] flex items-center justify-center">
            <Image
              src="/arrow_bottom.svg"
              alt="arrow_left"
              width={30}
              height={30}
            />
          </div>
          <div className="w-[50%] aspect-[1/1.3] relative">
            <Image
              src="/banner-main.png"
              alt="banner "
              fill
              className="object-cover"
            />
          </div>
          {/* arrow right */}
          <div className="absolute bg-slate-400 top-1/2 right-[5%] flex items-center justify-center">
            <Image
              src="/arrow_bottom.svg"
              alt="arrow_left"
              width={30}
              height={30}
            />
          </div>

          {/* total viewer */}
          <div className="flex gap-2 absolute left-[5%] bottom-0 py-2 px-4 bg-[#4c4c4c] rounded-xl">
            <Image src="/eye.svg" alt="eye" width={24} height={24} />
            <span className="text-white font-medium">3k</span>
          </div>
          {/* total image */}
          <div className="absolute right-[5%] bottom-0 py-2 px-4 bg-[#4c4c4c] rounded-xl">
            <span className="text-white font-medium">1/12</span>
          </div>
        </div>
        {/* review content */}
        <div className="py-4 mt-6">
          <div className="flex items-center gap-2">
            {/* rating */}
            <Image
              src="/star_icon.svg"
              alt="arrow_left"
              width={30}
              height={30}
            />
            <p className="text-xl font-medium">4.5</p>/<span>5.0</span>
          </div>

          {/* title */}
          <h4 className="text-3xl font-bold my-3">BUFFET TOKBOKKI</h4>
          <p className="text-lg">
            Ăn buffet tokbokki vừa ngon vừa no thì chỉ có thẳng tiến Spicy Box
            👍🏻 Tại vì điểm yêu thích ở đây chính là ăn ko giới hạn thời gian
            haha 🤣 Nước lẩu ngon, có sốt ko cay tới siu cay để pha vô ..
            Topping đa dạng nghen, tok cũng có nhiều loại, phái nhất tok phô
            mai, quầy line cũng đỉnh chóp 🤤 thịt heo refill thoải mái lun
          </p>
        </div>

        {/* link to store */}
        <Link href={"#"} className="py-6">
          <div className="flex gap-4 border rounded-xl p-6 hover:shadow-xl transition-shadow relative">
            {/* banner store */}
            <div className="w-[10%] aspect-[1/1] relative">
              <Image
                src="/banner-main.png"
                alt="banner"
                fill
                className="object-cover"
              />
            </div>
            {/* store detail */}
            <div>
              <h4 className="text-2xl font-semibold hover:text-primary transition-colors line-clamp-1">
                Spicy box - Saigon tre
              </h4>
              <p className="text-lg text-txt-second line-clamp-1">
                65 trần kìm xuyền, hà thanh, tahnhf kê, đà nẵng
              </p>
              <div className="flex items-center gap-2">
                {/* rating */}
                <Image
                  src="/star_icon.svg"
                  alt="arrow_left"
                  width={30}
                  height={30}
                />
                <p className="text-xl font-medium">4.5</p>
                <span className="text-lg font-medium text-txt-second">
                  ( 43 đánh giá )
                </span>
              </div>
            </div>

            {/* icon edit store */}
            <div className="absolute top-[7%] right-[2%] grid place-items-center p-2 bg-[#f0f2f4] rounded-full shadow-md">
              <Image
                src="/edit_comment.svg"
                alt="arrow_left"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
          </div>
        </Link>

        {/* comments */}
        {/* heading */}
        <div className="flex justify-between items-center py-6">
          {/* left */}
          <div className="flex gap-2">
            <Image
              src="/HEART.svg"
              alt="HEART"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="text-lg">2 người yêu thích</span>
          </div>
          {/* right */}
          <p className="text-lg font-semibold">1 Bình luận</p>
        </div>

        {/* input comment */}
        <div className="flex gap-6">
          <div className="w-12 h-12 relative">
            <Image
              src="/banner-main.png"
              alt="banner"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <textarea
            cols={12}
            className="outline-none resize-none overflow-hidden flex-1 p-3 text-xl bg-[#f4f5f8] rounded-xl"
          ></textarea>
        </div>

        <div className="flex justify-end mt-4">
          <BtnCommon title="Bình luận" commonStyles="" />
          <div className={`h-[60px] p-1 rounded-xl`}>
            <div
              className={`rounded-xl shadow-lg flex item-center justify-center px-4 py-3 bg-[#f7f7f7] text-black font-semibold text-lg min-w-[120px] cursor-pointer`}
            >
              Huỷ
            </div>
          </div>
        </div>
      </div>

      {/*  right */}
      <div className="w-[33%]">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div>
            <div className="flex items-center gap-4 pb-4">
              <div className="relative h-full w-[20%] aspect-[1/1]">
                <Image
                  src={
                    currentUser?.avatar
                      ? `${baseURL}/users/avatar/${currentUser?.avatar}`
                      : "/avatar.png"
                  }
                  alt="banner"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-txt-primary text-2xl font-semibold flex justify-center gap-3 flex-col">
                  {currentUser?.name}
                </h4>
                <p>{currentUser?.email}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center text-xl ">
                  <div className="text-txt-primary font-semibold">7</div>
                  <p className="text-txt-second font-medium">Bài viết</p>
                </div>
                <div className="text-center text-xl ">
                  <div className="text-txt-primary font-semibold">1</div>
                  <p className="text-txt-second font-medium">Người theo dõi</p>
                </div>
                <div className="text-center text-xl ">
                  <div className="text-txt-primary font-semibold">1</div>
                  <p className="text-txt-second font-medium">Đang theo dõi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* quảng cáo */}
        <div className="relative aspect-[1/1] mt-6">
          <Image
            src="/banner-detail-star.png"
            alt="banner-detail-star"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative aspect-[1/1] mt-6">
          <Image
            src="/banner-main.png"
            alt="banner-detail-star"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
