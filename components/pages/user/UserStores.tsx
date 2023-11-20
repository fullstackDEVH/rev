"use client";

import LoadingScreen from "@/components/commons/loading";
import { useAppSelector } from "@/redux/hooks";
import { baseURL } from "@/utils/api";
import { IReview, IStore } from "@/utils/interface";
import { getUserStores } from "@/utils/proxy";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserStores() {
  const [userStores, setUserStores] = useState<IStore[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { currentUser } = useAppSelector((state) => state.auth);

  const searchParams = useSearchParams();
  const userId = searchParams.get("uid") ?? currentUser?._id;

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const { data } = await getUserStores(userId!);
        setUserStores(data.data);
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
      <div className="grid grid-cols-2 gap-8">
        {userStores.length ? (
          userStores.map((store, ind) => <Card key={ind} store={store} />)
        ) : (
          <div className="text-center mt-8">Chưa có bài riviu nào . </div>
        )}
      </div>
    </>
  );
}

interface ICard {
  store: IStore;
}

function Card({ store }: ICard) {
  return (
    <Link
      href={`/store/${store._id}`}
      className="flex gap-4 border p-4 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="h-[150px] w-[150px] relative">
        <Image
          src={`${baseURL}/stores/image/${store._id}/${store.images[0]}`}
          alt="post"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="p-3">
        <h2 className="line-clamp-1 text-xl font-semibold">{store.name}</h2>
        <p className="line-clamp-1 text-xl font-medium text-txt-second">
          {store.address}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <Image src="/time.svg" alt="post" width={20} height={20} />
          <p className="text-txt-second font-medium">{store.close_time}</p>-
          <p className="text-txt-second font-medium">{store.open_time}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Image src="/dolar.svg" alt="post" width={24} height={24} />
          <p className="text-txt-second font-medium">
            {store.price_lowest} vnđ
          </p>
          -
          <p className="text-txt-second font-medium">
            {store.price_highest} vnđ
          </p>
        </div>
      </div>
    </Link>
  );
}
