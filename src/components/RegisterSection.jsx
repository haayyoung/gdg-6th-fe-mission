import { useState } from 'react'
import FormInput from './FormInput'

function RegisterSection() {
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')

  const handleRegister = () => {
    console.log(`${itemName} ${quantity} ${price} ${category} 가 등록되었습니다.`)
  }

  return (
    <>
      <h2 className="mb-6 text-lg font-bold">상품 등록</h2>

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

          <FormInput
            label="가격"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <FormInput
            label="카테고리"
            placeholder="카테고리 입력..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleRegister}
            className="w-32 py-2 text-sm text-white bg-blue-500 rounded-md"
          >
            등록
          </button>
        </div>
      </section>
    </>
  )
}

export default RegisterSection