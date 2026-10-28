
const API_URL = "https://suffusive-tinley-superaccurately.ngrok-free.dev";

export async function checkApiConnection() {
  const response = await fetch(`${API_URL}/`, {
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`FastAPI gagal merespons: ${response.status}`);
  }

  return response.json();
}

export async function getForecast(days: 7 | 14 | 30 = 7) {
  const response = await fetch(`${API_URL}/forecast?days=${days}`, {
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Gagal mengambil prediksi: ${response.status}`);
  }

  return response.json();
}
