"use client";

import { useEffect, useState } from "react";
import CardComment from "@/components/commons/cardReview";
import CardOutstanding from "@/components/commons/cardOutstanding";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { getStoreById } from "@/utils/proxy";
import { IStoreDetail } from "@/utils/interface";
import { baseURL } from "@/utils/api";
import LoadingScreen from "@/components/commons/loading";

export default function StoreDetail() {
  const router = useRouter();
  const params = useParams();
  const storeId = params.storeId as string;

  const [storeDetail, setStoreDetail] = useState<IStoreDetail>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getStoreDetail = async () => {
      setIsLoading(true);
      try {
        const { data } = await getStoreById(storeId);
        setStoreDetail(data.data);
      } catch (error: any) {
        alert(`${error?.response?.data?.error ?? "Lỗi rồi"}`);
      } finally {
        setIsLoading(false);
      }
    };
    getStoreDetail();
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : null}
      <div className="px-px-body py-8">
        {/* common detail */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-12">
            {/* title */}
            <div className="flex gap-4">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                <Image
                  src={`${baseURL}/stores/image/${storeId}/${storeDetail?.foundStore.images[0]}`}
                  alt="banner"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-txt-primary text-3xl font-semibold">
                  {storeDetail?.foundStore.name}
                </h2>
                <p className="text-second font-medium text-lg mt-3">
                  {storeDetail?.foundStore.slogan}
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
                <h5 className="font-semibold text-lg text-txt-primary">
                  {storeDetail?.total_rating}
                </h5>
                <span>/ 5 điểm</span>
              </div>
              {/* ratings */}
              <div className="flex gap-6 item-center mt-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-txt-second text-lg">
                    Phục vụ :
                  </span>
                  {storeDetail?.serve}
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
                  {storeDetail?.price}
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
                  {storeDetail?.space}

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
                  {storeDetail?.smell}

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
                  {storeDetail?.food_safety}

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
                  <p>{storeDetail?.foundStore.address}</p>
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
                  <p>
                    {storeDetail?.foundStore.price_lowest}
                    VND - {storeDetail?.foundStore.price_highest}VND
                  </p>
                </div>
                {/* time infor */}
                <div className="flex gap-3 text-lg text-txt-primary font-medium">
                  <Image
                    src="/time.svg"
                    alt="star_icon"
                    width={20}
                    height={20}
                  />
                  <span>Thời gian:</span>
                  <span className="text-second">Đang mở cửa</span>
                  <span>
                    ({storeDetail?.foundStore.open_time} -{" "}
                    {storeDetail?.foundStore.close_time})
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* images */}
          <div>
            <div className="grid grid-cols-4 w-full aspect-[3/1] gap-3 relative">
              <>
                {storeDetail && storeDetail?.foundStore?.images.length > 5 ? (
                  <p className="absolute z-10 bg-[#00000070] p-4 text-2xl font-medium rounded-full bottom-6 left-6 text-white">
                    {storeDetail?.foundStore?.images?.length - 5}
                  </p>
                ) : null}
              </>
              {storeDetail?.foundStore.images
                .slice(1, 7)
                .map((image, index) => (
                  <div
                    className={`relative ${
                      index === 0
                        ? "col-[1/3] row-[1/3] rounded-l-xl"
                        : "odd:rounded-r-xl"
                    } object-cover cursor-pointer transition-all hover:opacity-90 overflow-hidden shadow-md`}
                    key={index}
                  >
                    <Image
                      src={`${baseURL}/stores/image/${storeId}/${image}`}
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
                Đánh giá từ cộng đồng ({storeDetail?.foundReviews.length})
              </h4>
              <div
                className="py-4 px-6 text-lg font-semibold cursor-pointer bg-primary text-center text-white shadow rounded-2xl hover:opacity-80 transition-opacity"
                onClick={() => router.push(`/review?storeId=${storeId}`)}
              >
                Riviu địa điểm này
              </div>
            </div>

            {/* comments */}
            <div className="grid grid-cols-1 gap-6 mt-6">
              {storeDetail?.foundReviews.length ? (
                storeDetail?.foundReviews.map((review, index) => (
                  <CardComment review={review} key={index} />
                ))
              ) : (
                <div className="text-xl text-center pt-6">
                  Hãy là người đầu tiên rìviu địa điểm này.
                </div>
              )}
            </div>
          </div>

          {/* left 30% */}
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
                  <Image
                    src="/time.svg"
                    alt="star_icon"
                    width={20}
                    height={20}
                  />
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
    </>
  );
}
