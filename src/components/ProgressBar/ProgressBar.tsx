import "./ProgressBar.scss";

interface ProgressBarProps {
  fill: number;
  total: number;
  color: string; // element id to color
}

export default function ProgressBar({ fill, total, color }: ProgressBarProps) {
  return (
    <div className="progress_bar">
      <div
        className="progress_bar__fill"
        style={{
          width: `${(fill * 100) / Math.max(total, 1)}%`,
        }}
        id={color}
      ></div>
    </div>
  );
}
