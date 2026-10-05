import React, { useState } from 'react'

const CustomDropdown = ({ value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false)

  const selectedOption =
    options.find((option) => option.value === value)?.label || placeholder

  const handleSelect = (option) => {
    onChange(option.value)
    setOpen(false)
  }

  return (
    <div className="custom-dropdown">

      <button
        type="button"
        className="custom-dropdown-button"
        onClick={() => setOpen(!open)}
      >
        <span>{selectedOption}</span>

        <span className={`dropdown-arrow ${open ? 'open' : ''}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="custom-dropdown-menu">
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              className={`custom-dropdown-option ${
                value === option.value ? 'selected' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

    </div>
  )
}

export default CustomDropdown