export default function NewFromJiwa() {
  return (
    <div>
      <div className="px-40 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <div className="bg-lime-500 w-[50px] h-[2px]"></div>
          <div className="text-2xl font-bold text-teal-900">
            Terbaru dari Jiwa Group
          </div>
        </div>
        <div className="flex gap-3">
          {/* IMAGE 1 */}
          <div className="flex flex-col gap-4">
            <span className="w-[380px] h-[218px] border-4 border-teal-700 relative">
              <img
                src="/newFromJiwa/news-1708677003Thumbnail.jpg"
                alt="image"
                className="w-[380px] h-[228px] absolute -left-1 -top-5"
              />
            </span>
            <span className="flex flex-col gap-2 ">
              <div className=" text-xs text-gray-400">
                2024/02/23 - 03:30:03pm
              </div>
              <div className="font-bold text-teal-900">
                Daripada Ampas Kopi Dibuang, Mending <br /> Dijadikan Pupuk
                Tanaman!
              </div>
              <div className="text-xs font-light text-gray-500">
                Kopi secara alami kaya akan nutrisi seperti kalium, <br />{" "}
                nitrogen, dan magnesium, menjadikannya pilihan yang <br />
                sangat baik untuk pemupukan tanah. Bahkan, ampas kopi <br />{" "}
                dapat berfungsi sebagai kompos alami yang berkontribusi <br />{" "}
                pada kesehatan dan kesuburan tanah.
              </div>
              <div className=" flex gap-2 items-center font-bold text-teal-900 text-sm">
                SEE DETAIL
                <img
                  src="/newFromJiwa/arrow-right.png"
                  alt="image"
                  className="object-cover h-[10px] pt-1"
                />
              </div>
            </span>
          </div>

          {/* IMAGE 2 */}
          <div className="flex flex-col gap-4">
            <span className="w-[380px] h-[218px] border-4 border-teal-700 relative">
              <img
                src="/newFromJiwa/news-1704939624JJ-WBA-Press-Release-720X432.jpg"
                alt="image"
                className="w-[380px] h-[228px] absolute -left-1 -top-5"
              />
            </span>
            <span className="flex flex-col gap-2 ">
              <div className=" text-xs text-gray-400">
                2024/01/11 - 09:20:24am
              </div>
              <div className="font-bold text-teal-900">
                Janji Jiwa Raih Penghargaan sebagai The Brand <br /> Of The Year
                Dua Tahun Berturut- turut
              </div>
              <div className="text-xs font-light text-gray-500">
                Janji Jiwa mampu mempertahankan gelar sebagai Brand of <br />{" "}
                The Year untuk kategori "Retail Coffee” dari World Branding{" "}
                <br /> Awards 2023-2024 selama 2 tahun berturut-turut
              </div>
              <div className=" flex gap-2 items-center font-bold text-teal-900 text-sm">
                SEE DETAIL
                <img
                  src="/newFromJiwa/arrow-right.png"
                  alt="image"
                  className="object-cover h-[10px] pt-1"
                />
              </div>
            </span>
          </div>

          {/* IMAGE 3 */}
          <div className="flex flex-col gap-4">
            <span className="w-[380px] h-[218px] border-4 border-teal-700 relative">
              <img
                src="/newFromJiwa/news-1699864786Homepage_gadis-kretek.jpg"
                alt="image"
                className="w-[380px] h-[228px] absolute -left-1 -top-5"
              />
            </span>
            <span className="flex flex-col gap-2 ">
              <div className=" text-xs text-gray-400">
                2023/11/13 - 03:27:44pm
              </div>
              <div className="font-bold text-teal-900">
                Saat Kopi, Rempah dan Gadis Kretek Bertemu - <br /> Kolaborasi
                Janji Jiwa dan Netflix
              </div>
              <div className="text-xs font-light text-gray-500">
                Kolaborasi spesial dari Janji Jiwa x Gadis Kretek by Netflix{" "}
                <br /> menghadirkan 2 menu spesial
              </div>
              <div className=" flex gap-2 items-center font-bold text-teal-900 text-sm">
                SEE DETAIL
                <img
                  src="/newFromJiwa/arrow-right.png"
                  alt="image"
                  className="object-cover h-[10px] pt-1"
                />
              </div>
            </span>
          </div>
        </div>
      </div>

      {/* SELENGKAPNYA */}
      <div className=" pt-20 flex flex-col gap-10 items-center">
        <div className="w-[139px] h-[41px] border border-teal-900 text-center flex items-center justify-center hover:bg-teal-800 cursor-pointer">
            <span className="font-bold text-teal-900 hover:text-white">
                selengkapnya
            </span>
        </div>
        <div className="w-[1200px] h-[233px] bg-teal-900 border flex flex-col gap-4 items-center justify-center">
        <div className="bg-lime-500 w-[50px] h-[2px]"></div>
        <div className="text-white text-xl font-bold">
            Bergabunglah dengan kami!
        </div>
        <div className="text-center text-white font-light">
        Jadilah bagian dari keluarga besar Jiwa Group. Bertumbuh bersama <br /> memajukan industri F&B di Indonesia.
        </div>
        <div className="w-[139px] h-[41px] border bg-lime-300 text-center flex items-center justify-center hover:bg-lime-500 border-lime-300 cursor-pointer">
            <span className="font-bold text-teal-900">
                selengkapnya
            </span>
        </div>
        </div>
      </div>
    </div>
  );
}
