import { useState } from 'react'
import FormInput from './FormInput'

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
          <FormInput
            label="상품명"
            placeholder="상품명 입력..."
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />

          <FormInput
            label="수량"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
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