import React from "react";
import { useTranslation } from "react-i18next";

const Dropdown = ({ id, label, options, selected, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-primary">
        {t(label)}
      </label>
      <select
        id={id}
        name={id}
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-white shadow"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
