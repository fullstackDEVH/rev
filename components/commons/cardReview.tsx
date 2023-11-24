import { useAppSelector } from "@/redux/hooks";
import { baseURL } from "@/utils/api";
import { formatDateTime } from "@/utils/common";
import { IReview } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
import { Desc, Img } from ".";

interface IProps {
  review: IReview;
}

export default function CardReview({ review }: IProps) {
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <div className="shadow-lg bg-white rounded-2xl p-6 hover:shadow-2xl transition-shadow cursor-pointer">
      {/* title */}
      <div className="flex gap-3">
        <Image
          src={
            review?.author?.avatar
              ? `${baseURL}/users/avatar/${review?.author?.avatar}`
              : "/avatar_1.png"
          }
          alt="avatar"
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div className="grid grid-cols-1 gap-1">
          <h2 className="text-xl font-semibold">{review.author.name}</h2>
          <p className="text-[19px] font-medium">
            <span className="text-txt-second">
              {formatDateTime(review.created_at)}
            </span>{" "}
            - <span className="text-primary">{review.store.name}</span>
          </p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-2">{review.title}</h2>

      {/* rating comment */}
      <div className="flex gap-1 items-center mt-2">
        <div className="text-lg font-semibold">Đánh giá chung :</div>
        <Image src="/star_icon.svg" alt="star_icon" width={20} height={20} />
        <h5 className="font-semibold text-lg text-txt-primary">
          {review.rating.price}
        </h5>
        <span>/ 5 điểm</span>
      </div>
      {/* desc */}
      <Desc>{review.content}</Desc>

      <div className="relative grid grid-cols-5 gap-2 my-4">
        {review.images.slice(0, 5).map((image, index) => (
          <Img
            key={index}
            src={`${baseURL}/reviews/image/${review._id}/${image}`}
          />
        ))}
        {
          <>
            {review.images.length > 5 ? (
              <p className="absolute bg-[#00000070] p-2 text-lg font-medium rounded-full bottom-4 right-4 text-white">
                {review.images.length - 5}
              </p>
            ) : null}
          </>
        }
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-2 items-center">
          <Image
            src={`/heart_black.svg`}
            alt="heart_black"
            width={34}
            height={34}
          />
          <span className="text-lg font-medium">77</span>
        </div>
        <Link
          href={`/review/${review._id}`}
          className="rounded-full p-1 hover:shadow-xl group transition-shadow"
        >
          <Image
            src={`/chat.svg`}
            alt="chat icon"
            width={34}
            height={34}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
