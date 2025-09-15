import Link from "next/link";
export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >

      <div className="text-center">
        <h1 className="pt-40 text-7xl font-bold mb-4">
          Discover the Monasteries of Sikkim
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Virtual tours, events, and cultural heritage at your fingertips.
        </p>

        <Link href="/explore">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-2xl transition">
          Explore Now
        </button>
        </Link>
        
      </div>
    </div>
  );
}
