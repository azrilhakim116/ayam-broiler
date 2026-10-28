
import { NextRequest, NextResponse } from "next/server";

const API_URL =
  "https://suffusive-tinley-superaccurately.ngrok-free.dev";

export async function GET(request: NextRequest) {
  const days = request.nextUrl.searchParams.get("days") ?? "7";

  if (!["7", "14", "30"].includes(days)) {
    return NextResponse.json(
      { error: "Periode harus 7, 14, atau 30 hari." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${API_URL}/forecast?days=${days}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, {
        status: response.status,
      });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Tidak dapat terhubung ke FastAPI. Periksa Colab dan ngrok." },
      { status: 502 }
    );
  }
}
