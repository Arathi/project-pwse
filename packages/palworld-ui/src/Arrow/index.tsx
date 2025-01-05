import { useMemo } from "react";

type Props = {
  color?: string;
  placement?: "up" | "down" | "left" | "right";
};

type Params = {
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
};

const Arrow: React.FC<Props> = ({ color = "white", placement = "left" }) => {
  const params = useMemo<Params>(() => {
    switch (placement) {
      case "up":
        return {
          x: -12,
          y: 0,
          width: 24,
          height: 16,
          angle: 45,
        };
      case "right":
        return {
          x: -16,
          y: -12,
          width: 16,
          height: 24,
          angle: 135,
        };
      case "down":
        return {
          x: -12,
          y: -16,
          width: 24,
          height: 16,
          angle: -135,
        };
      case "left":
        return {
          x: 0,
          y: -12,
          width: 16,
          height: 24,
          angle: -45,
        };
    }
  }, [placement]);

  const viewBox = useMemo(() => {
    const { x, y, width, height } = params;
    return `${x} ${y} ${width} ${height}`;
  }, [params]);

  return (
    <svg width={params.width} height={params.height} viewBox={viewBox}>
      <g fill={color} transform={`rotate(${params.angle})`}>
        <rect x={0} y={0} width={4} height={16} />
        <rect x={0} y={0} width={16} height={4} />
      </g>
    </svg>
  );
};

export default Arrow;
