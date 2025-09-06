import { useEffect, useState } from "react";

export default function ProgressBar({
  target,
  color1,
  color2,
}: {
  target: number;
  color1?: string;
  color2?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setValue(target), 100);
    return () => clearTimeout(timeout);
  }, [target]);

  return (
    <div className={`w-1/2 rounded-full h-4 ${color1} bg-blend-darken mb-2`}>
      <div
        className={`${color2} h-4 rounded-full transition-all duration-700 ease-in-out`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
