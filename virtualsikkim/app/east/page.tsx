import Link from "next/link";
export default function RumtekPage() {
  return (
    <div className="min-h-screen bg-yellow-50">

      <div className="text-center">
        <h1 className="text-center text-6xl font-bold text-black pt-20">
          Welcome to the East Region !!
        </h1>

        <h1 className="text-left text-5xl font-bold text-black pl-10 pt-20">
         Rumtek 
        </h1>
        <p className="text-lg text-left text-gray-600 pl-10 pr-10 pt-5">
          Almost around 24 km from sikkim and Built in the mid -18th century,by 12th KarmapaLama the monastery is a major center of Karma Kagyu Lineage(one of four major schools of Tibetan Buddhism).
Built in traditional tibetan style with a main shrine hall, it houses rare Buddhist scriptures and manuscripts.
        </p>
        <p className="text-lg text-left text-gray-600 pl-10 pr-10 pt-1">
          LOSAD and KAYED are some of the major festivals during which the place comes to life, and showcases spirituality, art, and blend of Himalayan beauty.
        </p>
      </div>

      <div className="pl-10 pt-5 pb-10">
        <img src="/rumtek1.jpg" alt="Rumtek Monastery" className="w-350 h-120 rounded-lg" />
      </div>

      <div className="flex justify-center gap-60 mt-6 pb-50">
      <Link href="/rumtek_map">
        <button className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-2xl transition">
        Find in Map
      </button>
      </Link>

      <Link href="/rumtek_map">
        <button className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-2xl transition">
        Go with 360 View
      </button>
      </Link>
      </div>

    </div>
  );
}
