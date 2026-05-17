import { useState } from 'react'

function Admin() {
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')

  const [stockItemName, setStockItemName] = useState('')
  const [stockQuantity, setStockQuantity] = useState(0)

  const [deleteItemName, setDeleteItemName] = useState('')

  const handleRegister = () => {
    console.log(`${itemName} ${quantity} ${price} ${category} 가 등록되었습니다.`)
  }

  const handleAddStock = () => {
    console.log(`${stockItemName} ${stockQuantity} 가 추가되었습니다.`)
  }

  const handleDelete = () => {
    console.log(`${deleteItemName} 가 삭제되었습니다.`)
  }

  return (
    <main className="flex flex-col items-center pt-10">
      <div className="w-[620px]">
        <h2 className="mb-6 text-lg font-bold">상품 등록</h2>

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

            <label className="flex items-center gap-4">
              <span className="w-20 text-sm">가격</span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
              />
            </label>

            <label className="flex items-center gap-4">
              <span className="w-20 text-sm">카테고리</span>
              <input
                type="text"
                placeholder="카테고리 선택"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-gray-400">
              * 추가 가능 카테고리로 설정할 경우에 카테고리를 이용해주세요.
            </p>

            <button
              onClick={handleRegister}
              className="w-32 py-2 text-sm text-white bg-blue-500 rounded-md"
            >
              등록
            </button>
          </div>
        </section>

        <h2 className="mb-6 text-lg font-bold">재고 추가</h2>

        <section className="p-6 mb-12 border border-gray-300 rounded-md">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-4">
              <span className="w-20 text-sm">상품명</span>
              <input
                type="text"
                placeholder="상품명 입력..."
                value={stockItemName}
                onChange={(e) => setStockItemName(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
              />
            </label>

            <label className="flex items-center gap-4">
              <span className="w-20 text-sm">수량</span>
              <input
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
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

        <h2 className="mb-6 text-lg font-bold">상품 삭제</h2>

        <section className="p-6 border border-gray-300 rounded-md">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-4">
              <span className="w-20 text-sm">상품명</span>
              <input
                type="text"
                placeholder="상품명 입력..."
                value={deleteItemName}
                onChange={(e) => setDeleteItemName(e.target.value)}
                className="w-52 px-3 py-2 border border-gray-300 rounded-md"
              />
            </label>

            <button
              onClick={handleDelete}
              className="w-32 py-2 text-sm text-white bg-red-500 rounded-md"
            >
              삭제
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Admin