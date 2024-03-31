import { ChangeEvent } from "react";

interface selectI {
  name: string;
  label: string;
  defaultValue: string;
  handleFilterChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  myOptions: string[];
}

export default function Select(props: selectI) {
  const { name, defaultValue, label, handleFilterChange, myOptions } = props;

  return (
    <select
      className="select select-bordered w-[20%] lg:w-full"
      name={name}
      value={defaultValue}
      onChange={handleFilterChange}
    >
      <option disabled value="">
        {label}
      </option>
      {myOptions.map((option, _) => (
        <option key={_} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
