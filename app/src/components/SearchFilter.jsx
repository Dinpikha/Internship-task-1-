import React, { useState } from 'react'

const FilterDropdown = ({ value, setValue, options, label }) => {
  const [open, setOpen] = useState(false)

  const handleSelect = (option) => {
    setValue(option.value)
    setOpen(false)
  }

  const selectedOption =
    options.find((option) => option.value === value)?.label || label

  return (
    <div className="filter-dropdown">

      <button
        className="filter-dropdown-button"
        onClick={() => setOpen(!open)}
      >
        <span>{selectedOption}</span>
        <span className={`dropdown-arrow ${open ? 'open' : ''}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="filter-dropdown-menu">
          {options.map((option) => (
            <button
              key={option.value}
              className={`filter-option ${
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

const SearchFilter = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter
}) => {
  return (
    <div className="search-filter">

      <div className="search-box">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <FilterDropdown
        value={statusFilter}
        setValue={setStatusFilter}
        label="All Status"
        options={[
          { value: '', label: 'All Status' },
          { value: 'Pending', label: 'Pending' },
          { value: 'In Progress', label: 'In Progress' },
          { value: 'Completed', label: 'Completed' }
        ]}
      />

      <FilterDropdown
        value={priorityFilter}
        setValue={setPriorityFilter}
        label="All Priority"
        options={[
          { value: '', label: 'All Priority' },
          { value: 'Low', label: 'Low' },
          { value: 'Medium', label: 'Medium' },
          { value: 'High', label: 'High' }
        ]}
      />

    </div>
  )
}

export default SearchFilter