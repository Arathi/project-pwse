import { useEffect, useMemo, useState } from "react";
import "./index.less";

type Props = {
  className?: string;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
};

function Slider({
  className = "",
  value: alwaysValue,
  onChange = undefined,
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
}: Props) {
  const [value, setValue] = useState(defaultValue);

  const actualValue = useMemo(() => {
    if (alwaysValue !== undefined) {
      return alwaysValue;
    }
    return value;
  }, [alwaysValue, value]);

  const valueFormatted = useMemo(() => {
    return actualValue.toLocaleString();
  }, [actualValue]);

  const progress = useMemo(() => {
    return ((actualValue - min) * 100) / (max - min);
  }, [actualValue, min, max]);

  useEffect(() => {
    if (onChange !== undefined) {
      onChange(value);
    } else {
      console.warn("未定义滑动条数值变化事件：", value);
    }
  }, [value]);

  return (
    <div className={`pwse-slider ${className}`}>
      <div className="pwse-slider-value">{valueFormatted}</div>
      <div className="pwse-slider-range">
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const numeric = Number.parseFloat(e.currentTarget.value);
            if (!Number.isNaN(numeric)) {
              setValue(numeric);
            }
          }}
          style={{
            backgroundSize: `${progress.toFixed(2)}%`,
          }}
        />
      </div>
    </div>
  );
}

export default Slider;
