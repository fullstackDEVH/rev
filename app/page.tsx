import Image from "next/image";

export default function Home() {
  return (
    <main className="px-px-body flex gap-4 min-h-screen py-8">
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
        <div>

        </div>

        {/* posts review */}
      </div>
      <div className="w-[30%]"></div>
    </main>
  );
}
