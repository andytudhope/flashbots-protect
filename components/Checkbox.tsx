import React from "react";

const Checkbox = ({
  label,
  id,
  checked,
  onChange,
  disabled,
  arrangement,
  orientation,
}: {
  disabled?: boolean;
  label: string;
  id: string;
  arrangement?: "vertical" | "horizontal";
  orientation?: "first" | "last";
  checked: boolean;
  onChange: (val: boolean) => void;
}) => {
  const elements = [
    <label htmlFor={id} key={0} className="pl-2">
      {label}
    </label>,
    <input
      id={id}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      key={1}
      onChange={(e) => {
        onChange(e.target.checked);
      }}
    />,
  ];
  return <div>{orientation === "last" ? elements : elements.reverse()}</div>;
};

export default Checkbox;
