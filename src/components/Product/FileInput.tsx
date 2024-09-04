import React from 'react'

interface FileInputProps {
  id: string
  label: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FileInput: React.FC<FileInputProps> = ({ id, label, name, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-softWhite font-medium">
        {label}
      </label>

      <input
        type="file"
        id={id}
        name={name}
        onChange={onChange}
        className="p-3 border rounded-lg border-gray-300 bg-darkCharcoal text-softWhite focus:outline-none"
      />
    </div>
  )
}

export default FileInput
