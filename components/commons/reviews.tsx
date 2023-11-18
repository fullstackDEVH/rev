import Image from "next/image";
import { useState } from "react";
import CardReview from "./cardReview";

const tags = ["Tất cả", "Ăn sáng", "Ăn trưa", "Ăn vặt", "Xu hướng"];

export default function Reviews() {
  const [selectedTag, setSelectedTag] = useState("Tất cả");

  return (
    <div className="py-4">
      <div className="relative">
        <div className="flex gap-2 items-center cursor-pointer group">
          <span className="text-txt-priamry font-semibold text-2xl">
            Khám phá
          </span>
          <Image
            src="/arrow_bottom.svg"
            alt="arrow_bottom"
            width={24}
            height={24}
          />
        </div>

        {/* dropdown */}
        <div className="absolute shadow-md z-10 w-[150px] rounded-lg top-full left-0 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ">
          <div className="py-2 px-5 flex items-center cursor-pointer text-lg font-medium transition-all hover:text-second">
            Khám phá
          </div>
          <div className="py-2 px-5 flex items-center cursor-pointer text-lg font-medium transition-all hover:text-second">
            Theo dõi
          </div>
        </div>

        {/* tags review */}

        <div className="flex gap-4 items-center flex-wrap mt-4">
          {tags.map((tag) => (
            <div
              key={tag}
              className={`rounded-xl py-3 px-4 text-center hover:bg-input transition-all group cursor-pointer ${
                selectedTag === tag
                  ? "hover:text-txt-primary bg-input font-semibold"
                  : "text-txt-second"
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              <span
                className={`block w-full h-full text-xl font-semibold text-inherit group-hover:text-txt-primary`}
              >
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* list revieưs */}
        <div className="py-4">
          <div className="grid grid-cols-4 gap-4">
            {/* 1 */}
            <div className="flex flex-col gap-4">
              <CardReview />
              <CardReview />
              <CardReview />
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-4">
              <CardReview />
              <CardReview />
              <CardReview />
            </div>
            {/* 3 */}
            <div className="flex flex-col gap-4">
              <CardReview />
              <CardReview />
              <CardReview />
            </div>
            {/* 4 */}
            <div className="flex flex-col gap-4">
              <CardReview />
              <CardReview />
              <CardReview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
