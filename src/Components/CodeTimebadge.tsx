import React from "react";

export default function CodeTimeBadge() {
  return (
    <img
      src="https://codetime.dev/shield/29930"
      alt="CodeTime Badge"
      className="h-6 inline-block"
      style={{
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))",
      }}
    />
  );
}
