// app/api/codetime/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.codetime.dev/v3/users/shield?uid=29930",
      {
        headers: { "Cache-Control": "no-cache" },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch from CodeTime");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
