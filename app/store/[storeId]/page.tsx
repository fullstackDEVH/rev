"use client";

import CardComment from "@/components/commons/cardComment";
import CardOutstanding from "@/components/commons/cardOutstanding";
import Image from "next/image";

export default function StoreDetail() {

  return (
    <div className="px-px-body py-8">
      {/* common detail */}
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-12">
          {/* title */}
          <div className="flex gap-4">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden">
              <Image
                src="/banner-main.png"
                alt="banner"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-txt-primary text-3xl font-semibold">
                Spicy Box - Tokbokki Hot Pot - Giga Mall
              </h2>
              <p className="text-second font-medium text-lg mt-3">
                Ăn uống đê mê
              </p>
            </div>
          </div>

          <div>
            {/* rating common */}
            <div className="flex gap-1 items-center mt-6">
              <p className="text-xl font-semibold">Đánh giá chung :</p>
              <Image
                src="/star_icon.svg"
                alt="star_icon"
                width={20}
                height={20}
              />
              <h5 className="font-semibold text-lg text-txt-primary">4.5</h5>
              <span>/ 5 điểm</span>
            </div>
            {/* ratings */}
            <div className="flex gap-6 item-center mt-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-txt-second text-lg">
                  Phục vụ :
                </span>
                4.4
                <Image
                  src="/star_icon.svg"
                  alt="star_icon"
                  width={20}
                  height={20}
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium text-txt-second text-lg">
                  Giá cả :{" "}
                </span>
                4.4
                <Image
                  src="/star_icon.svg"
                  alt="star_icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-txt-second text-lg">
                  Không gian :{" "}
                </span>
                4.4
                <Image
                  src="/star_icon.svg"
                  alt="star_icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-txt-second text-lg">
                  Hương vị :{" "}
                </span>
                4.4
                <Image
                  src="/star_icon.svg"
                  alt="star_icon"
                  width={20}
                  height={20}
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium text-txt-second text-lg">
                  Vệ sinh :{" "}
                </span>
                4.4
                <Image
                  src="/star_icon.svg"
                  alt="star_icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            {/* infor store */}
            <div className="mt-4">
              <div className="flex gap-3 text-lg text-txt-primary font-medium">
                <Image
                  src="/address.svg"
                  alt="star_icon"
                  width={20}
                  height={20}
                />
                <span>Địa chỉ:</span>
                <p>
                  L5-22, Tầng 5, Giga Mall, 242 Phạm Văn Đồng, P. Hiệp Bình
                  Chánh, Quận Thủ Đức, Hồ Chí Minh
                </p>
              </div>
              {/* price infor */}

              <div className="flex gap-3 text-lg text-txt-primary font-medium my-2">
                <Image
                  src="/dolar.svg"
                  alt="star_icon"
                  width={20}
                  height={20}
                />
                <span>Giá tiền:</span>
                <p>79.000VND - 224.000VND</p>
              </div>
              {/* time infor */}
              <div className="flex gap-3 text-lg text-txt-primary font-medium">
                <Image src="/time.svg" alt="star_icon" width={20} height={20} />
                <span>Thời gian:</span>
                <span className="text-second">Đang mở cửa</span>
                <span>(9:00 - 22:00)</span>
              </div>
            </div>
          </div>
        </div>

        {/* images */}
        <div>
          <div className="grid grid-cols-4 w-full aspect-[3/1] gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                className={`relative ${
                  index === 0
                    ? "col-[1/3] row-[1/3] rounded-l-xl"
                    : "odd:rounded-r-xl"
                } object-cover cursor-pointer transition-all hover:opacity-90 overflow-hidden shadow-md`}
                key={index}
              >
                <Image
                  src={`/banner-main.png`}
                  alt={index + ""}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* body */}
      <div className="flex gap-8 py-6">
        <div className="w-[70%]">
          {/* heading */}
          <div className="flex justify-between items-center">
            <h4 className="text-txt-primary text-2xl font-semibold">
              Đánh giá từ cộng đồng (50)
            </h4>
            <div className="py-4 px-6 text-lg font-semibold cursor-pointer bg-primary text-center text-white shadow rounded-2xl hover:opacity-80 transition-opacity">
              Riviu địa điểm này
            </div>
          </div>

          {/* comments */}
          <div className="grid grid-cols-1 gap-6 mt-6">
            <CardComment />
            <CardComment />
            <CardComment />
            <CardComment />
          </div>
        </div>
        <div className="w-[30%]">
          <div className="relative aspect-[1/1]">
            <Image
              src="/banner-detail-star.png"
              alt="banner-detail-star"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/*  */}
          <div className="bg-white rounded-xl p-4 shadow-lg mt-6">
            <h2 className="text-xl text-txt-primary font-semibold py-3">
              Thông tin chung
            </h2>

            <div className="border-t border-[#f4f5f8] py-2 grid grid-cols-1 gap-4">
              <div className="flex flex-wrap gap-3 text-lg text-txt-primary font-medium">
                <Image
                  src="/address.svg"
                  alt="star_icon"
                  width={20}
                  height={20}
                />
                <span>Địa chỉ:</span>
                <p>
                  L5-22, Tầng 5, Giga Mall, 242 Phạm Văn Đồng, P. Hiệp Bình
                  Chánh, Quận Thủ Đức, Hồ Chí Minh
                </p>
              </div>
              {/* price infor */}

              <div className="flex flex-wrap gap-3 text-lg text-txt-primary font-medium my-2">
                <Image
                  src="/dolar.svg"
                  alt="star_icon"
                  width={24}
                  height={24}
                />
                <span>Giá tiền:</span>
                <p>79.000VND - 224.000VND</p>
              </div>
              {/* time infor */}
              <div className="flex flex-wrap gap-3 text-lg text-txt-primary font-medium">
                <Image src="/time.svg" alt="star_icon" width={20} height={20} />
                <span>Thời gian:</span>
                <span className="text-second">Đang mở cửa</span>
                <span>(9:00 - 22:00)</span>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="bg-white rounded-xl p-4 shadow-lg mt-6">
            <h2 className="text-xl text-txt-primary font-semibold py-3">
              Địa điểm gần đây
            </h2>

            <div className="border-t border-[#f4f5f8] py-2 grid grid-cols-1 gap-4">
              <CardOutstanding />
              <CardOutstanding />
              <CardOutstanding />
            </div>
          </div>
          {/*  */}
          <div className="bg-white rounded-xl p-4 shadow-lg mt-6">
            <h2 className="text-xl text-txt-primary font-semibold py-3">
              Địa điểm tương tự
            </h2>

            <div className="border-t border-[#f4f5f8] py-2 grid grid-cols-1 gap-4">
              <CardOutstanding />
              <CardOutstanding />
              <CardOutstanding />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
