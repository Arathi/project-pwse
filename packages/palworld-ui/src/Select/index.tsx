import { useEffect, useMemo, useState } from "react";
import Arrow from "../Arrow";

import "./index.less";

type ValueTypes = string | number | boolean;

type Props<VT extends ValueTypes = ValueTypes> = {
  value?: VT;
  onChange?: (value: VT) => void;
  defaultValue?: VT;
  options: {
    value: VT;
    label: React.ReactNode;
  }[];
};

function Select<VT extends ValueTypes = ValueTypes>({
  value: alwaysValue = undefined,
  onChange = undefined,
  defaultValue = undefined,
  options = [],
}: Props<VT>) {
  const [value, setValue] = useState<VT | undefined>(defaultValue);

  const actualValue = useMemo(() => {
    if (alwaysValue !== undefined) {
      return alwaysValue;
    }
    return value;
  }, [alwaysValue, value]);

  const selectedIndex = useMemo(() => {
    return options.findIndex((option) => option.value === actualValue);
  }, [actualValue, options]);

  const selectedLabel = useMemo(() => {
    if (selectedIndex >= 0 && selectedIndex < options.length) {
      return options[selectedIndex].label;
    }
    return <span style={{ color: "red" }}>未选择</span>;
  }, [selectedIndex, options]);

  const segments = useMemo(() => {
    return options.map((option, index) => {
      const active = index === selectedIndex ? "active" : "";
      return (
        <div
          key={`option-${option.value}`}
          className={`pwui-select-segment ${active}`}
        />
      );
    });
  }, [selectedIndex, options]);

  useEffect(() => {
    if (onChange !== undefined && value !== undefined) {
      onChange(value);
    }
  }, [value]);

  function previous() {
    const index = selectedIndex - 1;
    if (index >= 0 && index < options.length) {
      setValue(options[index].value);
    }
  }

  function next() {
    const index = selectedIndex + 1;
    if (index >= 0 && index < options.length) {
      setValue(options[index].value);
    }
  }

  return (
    <div className="pwui-select">
      <div className="pwui-select-button left">
        <button type="button" onClick={() => previous()}>
          <Arrow placement="left" />
        </button>
      </div>
      <div className="pwui-select-segmented">
        <div className="pwui-select-label">{selectedLabel}</div>
        <div className="pwui-select-segments">{segments}</div>
      </div>
      <div className="pwui-select-button right">
        <button type="button" onClick={() => next()}>
          <Arrow placement="right" />
        </button>
      </div>
    </div>
  );
}

export default Select;
