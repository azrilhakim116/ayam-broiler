
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-[75vh] items-center bg-white px-6">
      <div className="mx-auto w-full max-w-5xl py-16">
        <p className="mb-4 text-sm font-medium text-green-700">
          BROILER FORECAST · JAWA BARAT
        </p>

        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-gray-900 sm:text-5xl">
          Prediksi Harga Ayam Broiler
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
          Informasi harga ayam broiler tingkat eceran di Jawa Barat
          menggunakan metode XGBoost.
        </p>

        <Link
          href="/forecast"
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-green-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-800"
        >
          Lihat Prediksi
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
