"use client";
import ProgressBar from "./progress-bar";

export default function SkillsBar({
  text,
  colors,
  percentage,
  retrigger,
}: {
  text: string;
  colors: string[];
  percentage: number;
  retrigger?: boolean;
}) {

  const [color1, color2] = colors;

  return (
    <div className="w-1/2 space-y-4 mt-8">
      <div>
        <h2 className="text-lg font-medium mb-2">{text}</h2>
      </div>
      <ProgressBar
        target={percentage}
        color2={color1}
        color1={color2}
        retrigger={retrigger}
      />
    </div>
  );
}
