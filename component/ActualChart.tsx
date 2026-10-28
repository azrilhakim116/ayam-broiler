
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { ForecastResponse } from "@/component/ForecastResults.tsx";

type Props = {
  forecast: ForecastResponse | null;
};

export default function ActualChart({ forecast }: Props) {
  const chartData = forecast?.data.map((item) => ({
    tanggal: item.date,
    harga: item.predicted_price,
  })) ?? [];

  if (!forecast || chartData.length === 0) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded-lg bg-gray-50 text-center text-sm text-gray-500">
        Pilih periode forecast untuk menampilkan grafik prediksi.
      </div>
    );
  }

  return (
    <div className="h-[300px] w-full min-w-0 sm:h-[360px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 15, bottom: 35 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

          <XAxis
            dataKey="tanggal"
            tick={{ fontSize: 10 }}
            angle={-35}
            textAnchor="end"
            interval="preserveStartEnd"
          />

          <YAxis
            domain={["auto", "auto"]}
            tickFormatter={(value) =>
              `${(Number(value) / 1000).toLocaleString("id-ID")} rb`
            }
            tick={{ fontSize: 11 }}
            width={65}
          />

          <Tooltip
            formatter={(value) => [
              `Rp ${Number(value).toLocaleString("id-ID")}/kg`,
              "Harga prediksi",
            ]}
            labelFormatter={(label) => `Tanggal: ${label}`}
          />

          <Line
            type="monotone"
            dataKey="harga"
            name="Harga prediksi"
            stroke="#15803D"
            strokeWidth={2.5}
            dot={chartData.length <= 14}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
