"use client";

import LoadingScreen from "@/components/commons/loading";
import { useAppSelector } from "@/redux/hooks";
import { baseURL } from "@/utils/api";
import { IReview } from "@/utils/interface";
import { getUserById, getUserReviews } from "@/utils/proxy";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserReviews() {
  const [userReviews, setUserReviews] = useState<IReview[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { currentUser } = useAppSelector((state) => state.auth);

  const searchParams = useSearchParams();
  const userId = searchParams.get("uid") ?? currentUser?._id;

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const { data } = await getUserReviews(userId!);
        setUserReviews(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (userId) getUser();
  }, [userId]);

  return (
    <>
      {isLoading ? <LoadingScreen /> : null}
      <div className="grid grid-cols-4 gap-8">
        {userReviews.length ? (
          userReviews.map((review, ind) => <Card key={ind} review={review} />)
        ) : (
          <div className="text-center mt-8">Chưa có bài riviu nào . </div>
        )}
      </div>
    </>
  );
}

interface ICard {
  review: IReview;
}

function Card({ review }: ICard) {
  return (
    <Link
      href={`/review/${review._id}`}
      className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="h-[350px] relative">
        <Image
          src={`${baseURL}/reviews/image/${review._id}/${review.images[0]}`}
          alt="post"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h2 className="line-clamp-1 text-xl font-medium">{review.title}</h2>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2 items-center">
            <Image
              src="/avatar_1.png"
              alt="avatar"
              className="rounded-full"
              width={30}
              height={30}
            />
            <p className="text-txt-second font-medium line-clamp-1">
              {review.author.name}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/comment.svg"
              alt="comment icon"
              width={24}
              height={24}
            />
            <p className="text-txt-second font-medium">
              {review.comments.length}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
