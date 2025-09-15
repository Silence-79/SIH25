import Link from "next/link";
export default function Explore() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

        {/* Card 1 */}
        <Link href="/east" className="block">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition hover:bg-blue-300">
          <img src="/rumtek_button.webp" alt="Region 1" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h2 className="text-black text-xl font-bold mb-2">East Sikkim</h2>
          </div>
        </div>
        </Link>

        {/* Card 2 */}
        <Link href="/west" className="block">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition hover:bg-blue-300">
          <img src="/pemayangtse.avif" alt="Region 2" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h2 className="text-black text-xl font-bold mb-2">West Sikkim</h2>
          </div>
        </div>
        </Link>

        {/* Card 3 */}
        <Link href="/south" className="block">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition hover:bg-blue-300">
          <img src="/monastery3.jpg" alt="Region 3" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h2 className="text-black text-xl font-bold mb-2">South Sikkim</h2>
          </div>
        </div>
        </Link>

      </div>
    </div>
  );
}
