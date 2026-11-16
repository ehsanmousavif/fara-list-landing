import React from "react";
import "./RockerSwitch.css";

interface RockerSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}

/**
 * 3D Rocker Switch Component
 * Based on https://uiverse.io/r7chardgh/dry-rabbit-69
 */
export const RockerSwitch: React.FC<RockerSwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  leftLabel = "off",
  rightLabel = "on",
  className = "",
}) => {
  return (
    <label
      className={`!w-18 !h-8 rocker-switch ${className}`}
      style={{ direction: "ltr" }}
    >
      <input
        className="rocker-cb"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="rocker-toggle">
        <span className="rocker-left !px-4 text-sm">{leftLabel}</span>
        <span className="rocker-right !px-4 text-sm ">{rightLabel}</span>
      </span>
    </label>
  );
};

export default RockerSwitch;
