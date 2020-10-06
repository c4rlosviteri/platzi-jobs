import React from 'react'

function Dropdown({
  options,
  onChange,
  placeholder,
  id,
  label,
  value,
  disabled = false,
}) {
  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor={id}>
        {label}
      </label>
      <select
        disabled={disabled}
        id={id}
        className="dropdown__select"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        tabIndex={0}
      >
        <option data-testid="dropdown-option" value="">
          {placeholder}
        </option>
        {options?.length > 0 &&
          options.map((option) => (
            <option key={option} value={option} data-testid="dropdown-option">
              {option}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Dropdown
