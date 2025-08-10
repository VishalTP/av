import React, { useEffect, useMemo, useState } from "react";

interface CountdownProps {
  target: Date;
}

const pad = (n: number) => n.toString().padStart(2, "0");

const Countdown: React.FC<CountdownProps> = ({ target }) => {
  const targetTime = useMemo(() => target.getTime(), [target]);
  const [remaining, setRemaining] = useState<number>(Math.max(0, targetTime - Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.max(0, targetTime - Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-4 text-center">
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((item) => (
        <div key={item.label} className="rounded-md border bg-card shadow-sm p-3 md:p-4">
          <div className="text-3xl md:text-4xl font-semibold">
            {pad(item.value)}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
