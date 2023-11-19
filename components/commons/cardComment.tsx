import { baseURL } from "@/utils/api";
import { IReview } from "@/utils/interface";
import Image from "next/image";

interface IProps {
  review: IReview;
}

export default function CardComment({ review }: IProps) {
  return (
    <div className="shadow-lg bg-white rounded-2xl p-6">
      {/* title */}
      <div className="flex gap-3">
        <Image
          src="/avatar.png"
          alt="avatar"
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div className="grid grid-cols-1 gap-1">
          <h2 className="text-xl font-semibold">username</h2>
          <p className="text-[19px] font-medium">
            <span className="text-txt-second">{review.created_at}</span> -{" "}
            <span className="text-primary">Gangnam Topokki Buffet</span>
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
      <p className="text-lg">{review.content}</p>

      <div className="relative grid grid-cols-5 gap-2 mt-4">
        {review.images.slice(0, 6).map((image, index) => (
          <div key={index} className="aspect-[1/1] relative">
            <Image
              src={`${baseURL}/reviews/image/${review._id}/${image}`}
              alt="img"
              fill
              className="object-cover rounded-lg"
            />
          </div>
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
    </div>
  );
}
