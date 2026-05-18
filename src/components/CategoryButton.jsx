function CategoryButton({ children, onClick, isHeader = false }) {
  return (
    <button
      onClick={onClick}
      className={`w-40 px-4 py-2 text-sm text-left border border-gray-300 ${
        isHeader
          ? 'rounded-t-md bg-white'
          : 'bg-gray-100 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  )
}

export default CategoryButton