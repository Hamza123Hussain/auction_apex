import React from 'react'

interface InputFieldProps {
  id: string
  label: string
  type: string
  name: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-softWhite font-medium">
        {label}
      </label>
      <input
        disabled={id === 'product'}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="p-3 border rounded-lg border-gray-300 bg-darkCharcoal text-softWhite focus:outline-none focus:border-neonGreen"
      />
    </div>
  )
}

export default InputField
