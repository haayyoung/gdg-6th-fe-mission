import { useState } from 'react'

function StockSection() {
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState(0)

  const handleAddStock = () => {
    console.log(`${itemName} ${quantity} 가 추가되었습니다.`)
  }

  return (
    <>
      <h2 className="mb-6 text-lg font-bold">재고 추가</h2>

      <section className="p-6 mb-12 border border-gray-300 rounded-md">
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-4">
            <span className="w-20 text-sm">상품명</span>

            <input
              type="text"
              placeholder="상품명 입력..."
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="flex items-center gap-4">
            <span className="w-20 text-sm">수량</span>

            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleAddStock}
            className="w-32 py-2 text-sm text-white bg-blue-500 rounded-md"
          >
            추가
          </button>
        </div>
      </section>
    </>
  )
}

export default StockSection