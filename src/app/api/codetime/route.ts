// app/api/codetime/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.codetime.dev/v3/users/shield?uid=29930",
      {
        headers: { "Cache-Control": "no-cache" }, // optional
      }
    );

    if (!res.ok) throw new Error("Failed to fetch from CodeTime");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "CodeTime API error" }, { status: 500 });
  }
}
