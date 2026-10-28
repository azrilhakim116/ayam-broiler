"use client";

import { useState } from "react";
import ActualChart from "@/component/ActualChart";
import ForecastResults from "@/component/ForecastResults.tsx";
import type { ForecastResponse } from "@/component/ForecastResults.tsx";

export default function ForecastPage() {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Judul */}
        <section>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Prediksi Harga Ayam Broiler
          </h1>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Lihat harga aktual dan perkiraan harga ayam broiler
            tingkat eceran di Jawa Barat.
          </p>
        </section>

        {/* Pilihan periode */}
        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Pilih Periode Prediksi
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Tentukan berapa hari ke depan yang ingin diprediksi.
          </p>

          <div className="mt-4">
            <ForecastResults onResult={setForecast} />
          </div>
        </section>

        {/* Grafik harga aktual */}
        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Grafik Harga Aktual
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Riwayat harga berdasarkan data yang tersedia.
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <ActualChart forecast={forecast} />
          </div>
        </section>

        {/* Tabel prediksi */}
        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Hasil Prediksi
            </h2>

            {forecast && (
              <p className="mt-1 text-sm text-gray-500">
                Periode: {forecast.forecast_start} sampai{" "}
                {forecast.forecast_end}
              </p>
            )}
          </div>

          {!forecast ? (
            <div className="rounded-lg bg-gray-50 px-4 py-8 text-center">
              <p className="text-sm text-gray-600">
                Pilih periode prediksi di atas untuk menampilkan
                hasilnya di sini.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="bg-green-50 text-green-900">
                    <th className="border border-gray-200 px-4 py-3 text-left">
                      No.
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left">
                      Tanggal
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-right">
                      Harga Prediksi (Rp/kg)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {forecast.data.map((item, index) => (
                    <tr
                      key={item.date}
                      className="transition hover:bg-gray-50"
                    >
                      <td className="border border-gray-200 px-4 py-3">
                        {index + 1}
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        {item.date}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-right font-medium tabular-nums">
                        {Math.round(item.predicted_price).toLocaleString(
                          "id-ID"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}
