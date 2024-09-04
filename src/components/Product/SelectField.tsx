import React from 'react'

interface SelectFieldProps {
  id: string
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; label: string }[]
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-softWhite font-medium">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="p-3 border rounded-lg border-gray-300 bg-darkCharcoal text-softWhite focus:outline-none focus:border-neonGreen"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
