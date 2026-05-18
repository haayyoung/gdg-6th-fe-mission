import { useState } from 'react'
import FormInput from './FormInput'

function DeleteSection() {
  const [itemName, setItemName] = useState('')

  const handleDelete = () => {
    console.log(`${itemName} 가 삭제되었습니다.`)
  }

  return (
    <>
      <h2 className="mb-6 text-lg font-bold">상품 삭제</h2>

      <section className="p-6 border border-gray-300 rounded-md">
        <div className="flex items-center justify-between">
          <FormInput
            label="상품명"
            placeholder="상품명 입력..."
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            inputClassName="w-52"
          />

          <button
            onClick={handleDelete}
            className="w-32 py-2 text-sm text-white bg-red-500 rounded-md"
          >
            삭제
          </button>
        </div>
      </section>
    </>
  )
}

export default DeleteSection