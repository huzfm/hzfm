"use client ";
import { useEffect, useState } from "react";

export default function CodeTimeBadge() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchBadge = async () => {
      try {
        const res = await fetch("/api/codetime");
        const json = await res.json();
        if (json.message) setMessage(json.message);
      } catch (error) {
        console.error("Failed to fetch CodeTime badge:", error);
      }
    };

    fetchBadge();
  }, []);

  return (
    <div
      style={{ fontFamily: '"JetBrains Mono", ui-monospace, monospace' }}
      className="
    inline-flex items-center gap-2 px-4 py-1.5
    text-sm font-bold tracking-tight rounded-full
    bg-black text-white
    shadow-sm shadow-black/30
    ring-1 ring-inset ring-white/10
    backdrop-blur-sm
    transition transform hover:scale-105 hover:shadow-md
  "
    >
      {" "}
      {message ? `CodeTime: ${message}` : "Loading..."}
    </div>
  );
}
