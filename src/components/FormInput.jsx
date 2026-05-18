function FormInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  inputClassName = 'flex-1',
}) {
  return (
    <label className="flex items-center gap-4">
      <span className="w-20 text-sm">{label}</span>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${inputClassName} px-3 py-2 border border-gray-300 rounded-md`}
      />
    </label>
  )
}

export default FormInput