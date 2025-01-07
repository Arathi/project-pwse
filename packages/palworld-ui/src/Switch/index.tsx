import { useEffect, useMemo, useState } from "react";

import "./index.less";

type Props = {
  className?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  off?: React.ReactNode;
  on?: React.ReactNode;
  defaultValue?: boolean;
};

const Switch: React.FC<Props> = ({
  className = "",
  value: alwaysValue = undefined,
  onChange = undefined,
  off = "OFF",
  on = "ON",
  defaultValue = false,
}) => {
  const [value, setValue] = useState(defaultValue);
  const actualValue = useMemo(() => {
    if (alwaysValue !== undefined) return alwaysValue;
    return value;
  }, [alwaysValue, value]);

  useEffect(() => {
    if (onChange !== undefined) {
      onChange(value);
    } else {
      console.debug("未定义开关状态改变事件");
    }
  }, [value]);

  const offActive = useMemo(() => (actualValue ? "" : "active"), [actualValue]);
  const onActive = useMemo(() => (actualValue ? "active" : ""), [actualValue]);

  return (
    <div className={`pwui-switch ${className}`}>
      <button
        type="button"
        className={`pwui-switch-button ${offActive}`}
        onClick={() => setValue(false)}
      >
        {off}
      </button>
      <button
        type="button"
        className={`pwui-switch-button ${onActive}`}
        onClick={() => setValue(true)}
      >
        {on}
      </button>
    </div>
  );
};

export default Switch;
