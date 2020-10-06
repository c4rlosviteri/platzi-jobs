import React from 'react'

function Input({ id, onChange, value, label }) {
  return (
    <div className="input__container">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <span className="input__icon" />
      <input
        autoComplete="off"
        className="input"
        id={id}
        name={id}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        value={value}
        required
      />
    </div>
  )
}

export default Input
