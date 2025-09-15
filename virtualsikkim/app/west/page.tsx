import Link from "next/link";
export default function PemayangtsePage() {
  return (
    <div className="min-h-screen bg-yellow-50">

      <div className="text-center">
        <h1 className="text-center text-6xl font-bold text-black pt-20">
          Welcome to the West Region !!
        </h1>

        <h1 className="text-left text-5xl font-bold text-black pl-10 pt-20">
         Pemayangtse
        </h1>
        <p className="text-lg text-left text-gray-600 pl-10 pr-10 pt-5">
          The principal monastery of the sikkim kingdom was found in 1705 by Lama Lhatsun Chenpo. It is a 3-storey monastery with murals and thangkas and a stunning Kanchenjunga view. February and March is one of the best times to visit the place due to Tibetan New Year and Cham Dance Festival.
        </p>
        <p className="text-lg text-left text-gray-600 pl-10 pr-10 pt-1">
          The monastery is an ancient seat of Nyingma Buddhism and is close to a lot of tourist favourite spots starting from Rabdentse ruins to Singshore Bridge and to the Khecheopalri lake. Located just 2 km from Pelling, with Bagdogra aiport and NJP railway station just within 5 hours, and a whole arena of restaurants and hotels, the place is a heavenly abode. 
        </p>
      </div>

      <div className="pl-10 pt-5 pb-10">
        <img src="/pemayangtse1.avif" alt="Pemayangtse Monastery" className="w-350 h-190 rounded-lg" />
      </div>

      <div className="flex justify-center gap-60 mt-6 pb-50">
      <Link href="/pemayangtse_map">
        <button className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-2xl transition">
        Find in Map
      </button>
      </Link>

      <Link href="/pemayangtse_map">
        <button className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-2xl transition">
        Go with 360 View
      </button>
      </Link>
      </div>

    </div>
  );
}
