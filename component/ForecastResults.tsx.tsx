"use client";

import { useState } from "react";

export type ForecastItem = {
    date: string;
    predicted_price: number;
    type: string;
};

export type ForecastResponse = {
    status: string;
    forecast_start: string;
    forecast_end: string;
    days: number;
    data: ForecastItem[];
};

type Props = {
    onResult: (result: ForecastResponse | null) => void;
};

export default function ForecastResults({ onResult }: Props) {
    const [days, setDays] = useState<7 | 14 | 30>(7);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function loadForecast(period: 7 | 14 | 30) {
        setDays(period);
        setLoading(true);
        setError("");
        onResult(null);

        try {
            const response = await fetch(
                `/api/forecast?days=${period}`,
                { cache: "no-store" }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ?? "Gagal mengambil data prediksi."
                );
            }

            onResult(data as ForecastResponse);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Terjadi kesalahan."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <h2>Periode Forecast</h2>

            <div className="forecast-period-buttons">
                {([7, 14, 30] as const).map((period) => (
                    <button
                        key={period}
                        type="button"
                        onClick={() => loadForecast(period)}
                        disabled={loading}
                        aria-pressed={days === period}
                        className={
                            days === period
                                ? "border-green-700 bg-green-700 text-white"
                                : "border-gray-300 bg-white text-gray-800"
                        }
                    >
                        {period} Hari
                    </button>
                ))}
            </div>

            {loading && (
                <p>Memuat prediksi {days} hari...</p>
            )}

            {error && (
                <p className="text-red-600">{error}</p>
            )}
        </div>
    );
}
