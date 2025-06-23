import { useState, useEffect } from "react";

export default function OnlineStatus() {
  const statuses = [
    "Online",
    "Coding",
    "Testing",
    "Committing",
    "Debugging",
    "Pushing",
    "Merging",
    "Deploying",
    "Building",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % statuses.length);
    }, 900); // switch every 2 seconds

    return () => clearInterval(interval);
  }, [statuses.length]);

  return (
    <span
      className="
        relative inline-block overflow-hidden 
        text-xs sm:text-[12px] 
        min-w-[65px] sm:min-w-[70px] 
        h-[16px] sm:h-[18px]
      "
    >
      {statuses.map((status, i) => (
        <span
          key={i}
          className={`
            absolute left-0 top-0 w-full transition-all duration-500
            ${
              i === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            }
          `}
        >
          {status}
        </span>
      ))}
    </span>
  );
}
