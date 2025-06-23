import { useEffect, useState } from "react";

// ✅ Define the API response type
interface CodeTimeResponse {
  schemaVersion: number;
  label: string;
  message: string;
  color: string;
  style: string;
}

export default function CodeTimeBadge() {
  const [message, setMessage] = useState<string>("");

  const fetchBadge = async () => {
    try {
      const res = await fetch(
        "https://api.codetime.dev/v3/users/shield?uid=29930"
      );
      const json: CodeTimeResponse = await res.json();
      setMessage(json.message);
    } catch (error) {
      console.error("Failed to fetch CodeTime data:", error);
    }
  };

  useEffect(() => {
    fetchBadge(); // initial fetch

    const interval = setInterval(fetchBadge, 60 * 1000); // re-fetch every 60 sec

    return () => clearInterval(interval); // cleanup
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
      {message ? `CodeTime: ${message}` : "Loading..."}
    </div>
  );
}
