import React, { useMemo } from "react";

interface FirefliesProps {
  count?: number;
}

const Fireflies: React.FC<FirefliesProps> = ({ count = 28 }) => {
  const flies = useMemo(
    () =>
      Array.from({ length: count }).map(() => {
        const size = Math.random() * 3 + 3; // 3-6px
        const duration = Math.random() * 6 + 7; // 7-13s
        const delay = Math.random() * 6; // 0-6s
        const delay2 = Math.random() * 3; // 0-3s
        const top = Math.random() * 100; // %
        const left = Math.random() * 100; // %
        const mx = Math.random() * 120 - 60; // -60..60px
        const my = Math.random() * 120 - 60; // -60..60px
        return { size, duration, delay, delay2, top, left, mx, my };
      }),
    [count]
  );

  return (
    <div className="fireflies">
      {flies.map((f, i) => (
        <span
          key={i}
          className="firefly"
          style={{
            top: `${f.top}%`,
            left: `${f.left}%`,
            ["--size" as any]: `${f.size}px`,
            ["--duration" as any]: `${f.duration}s`,
            ["--delay" as any]: `${f.delay}s`,
            ["--delay2" as any]: `${f.delay2}s`,
            ["--mx" as any]: `${f.mx}px`,
            ["--my" as any]: `${f.my}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Fireflies;
