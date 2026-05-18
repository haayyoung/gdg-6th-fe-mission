import { useState } from 'react'

function Item({ item }) {
  const [count, setCount] = useState('0')
  const [isAdded, setIsAdded] = useState(false)

  const isActive = count !== '' && Number(count) > 0

  const handleCountChange = (e) => {
    setCount(e.target.value)
    setIsAdded(false)
  }

  const handleCartClick = () => {
    console.log('버튼 클릭됨')

    if (!isActive) return

    setIsAdded(true)
  }

  return (
    <div className="flex items-center justify-between w-[620px] px-6 py-5 border border-gray-300 rounded-lg bg-white">
      <div>
        <h3 className="mb-5 text-lg font-bold text-gray-900">
          {item.itemName}
        </h3>

        <div className="flex items-center gap-4">
          <span className="text-base text-gray-900">
            {item.price} 원
          </span>

          <span className="text-sm text-gray-400">
            남은 수량: {item.quantity}개
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="number"
          min="1"
          placeholder="개수 입력..."
          value={count}
          onChange={handleCountChange}
          className="w-44 px-4 py-3 text-base border border-gray-300 rounded-lg outline-none focus:border-blue-400"
        />

        <button
          onClick={handleCartClick}
          disabled={isAdded || !isActive}
          className={
            isAdded
              ? 'w-36 py-3 text-base font-semibold text-white bg-gray-400 rounded-lg cursor-not-allowed'
              : isActive
                ? 'w-36 py-3 text-base font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600'
                : 'w-36 py-3 text-base font-semibold text-white bg-gray-300 rounded-lg cursor-not-allowed'
          }
        >
          장바구니
        </button>
      </div>
    </div>
  )
}

export default Item