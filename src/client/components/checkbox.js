import React from 'react'

function Checkbox({ label, onChange, value }) {
  return (
    <div className="checkbox">
      <label>
        <span className="checkbox__container">
          <input
            className="checkbox__input"
            type="checkbox"
            onChange={(e) => onChange(e.target.checked)}
            checked={value}
          />
          <span className="checkbox__fake-input">
            <svg
              className="checkbox__svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                d="M1.73 12.91l6.37 6.37L22.79 4.59"
              />
            </svg>
          </span>
        </span>
        <span className="checkbox__label">{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
