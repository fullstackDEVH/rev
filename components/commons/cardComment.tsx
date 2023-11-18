import Image from "next/image";

export default function CardComment() {
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
          <h2 className="text-xl font-semibold">Đi chơi khum</h2>
          <p className="text-[19px] font-medium">
            <span className="text-txt-second">18/11/2022 lúc 11:48</span> -{" "}
            <span className="text-primary">Gangnam Topokki Buffet</span>
          </p>
        </div>
      </div>
      {/* rating comment */}
      <div className="flex gap-1 items-center mt-6">
        <p className="text-lg font-semibold">Đánh giá chung :</p>
        <Image src="/star_icon.svg" alt="star_icon" width={20} height={20} />
        <h5 className="font-semibold text-lg text-txt-primary">4.5</h5>
        <span>/ 5 điểm</span>
      </div>
      {/* desc */}
      <p className="text-lg">
        Quẩy tưng bừng buffet Topokki no nê thỏa thích chỉ với giá "sinh viên"
        Quẩy tưng bừng buffet Topokki no nê thỏa thích chỉ với giá "sinh viên"
        ▫️ Gangnam Topokki Buffet ▫️ 714 Sư Vạn Hạnh, P.12, Quận 10, TP. HCM ▫️
        10H30 - 15H30 | 79.000đ ( Thứ 2 - 6 - Trừ Ngày Lễ và Thứ 7, CN ) Lâu lâu
        lại thèm mấy miếng tokbokki dẻo quẹo, cay cay đậm đà quá nên rủ nhỏ bạn
        đi cùng. Lên mạng đọc review thấy quán này hay hay nên đi ăn thử nhân
        tiện review cho mn nè. Mà ai dè lại kiếm được luôn quán ruột để lần sau
        đỡ phải nghĩ "ăn gì vừa ngon vừa rẻ nữa". Thật bất ngờ là chỉ với 79k,
        buffet tokbokki ở đây nhiều món hơn cả mong đợi. Đồ nhúng lẩu khá đa
        dạng: xúc xích, các loại tokbokki, có cả tokbokki nhân phomai béo béo,
        có thêm gà, ngao và các loại rau củ quả như ngô, nấm... Nước lẩu đã có
        sốt sẵn nên mình chỉ cần tự pha theo khẩu vị của mình thôi. Cứ tưởng
        buffet tokbokki thì sẽ chỉ có tok, ai dè còn rất nhiều món ăn kèm ngon
        lành khác, điển hình là cơm trộn, gà chiên sốt, cơm cuộn, miến trộn, kim
        chi cũng khá ngon và chuẩn vị Hàn. Đặc biệt là nước uống thì uống thỏa
        thích nhé mọi người, không tính phí. Nước uống thì có coca và nước cam.
        Có cả tráng miệng là kem với các vị tự chọn, cũng ăn thỏa thích luôn ạ.
        Không gian quán tuy không quá to và rộng rãi nhưng các bàn được bài trí
        nhỏ nhắn xinh xắn. Dù chỉ với 79k, đáng lẽ ra không phải kì vọng quá
        nhiều nhưng thật sự Gangnam Topokki Buffet mang lại trải nghiệm ăn uống
        xứng đáng hơn 79K rất nhiều. Mọi người hãy thử và review cảm nhận với
        Khôi nhé #saigon
      </p>

      <div className="grid grid-cols-5 gap-2 mt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="aspect-[1/1] relative">
            <Image
              src="/banner-main.png"
              alt="img"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
