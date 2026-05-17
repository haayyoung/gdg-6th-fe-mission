import { useEffect, useState } from 'react'
import { getItemData } from '../apis/shopApi'
import Item from './Item'

function Content() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItemData()
      setItems(data)
    }

    fetchItems()
  }, [])

  return (
    <main className="flex flex-col items-center pt-10">
      <div className="flex w-[420px]">
        <input
          type="text"
          placeholder="상품 검색..."
          className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-md outline-none"
        />

        <button className="px-6 py-2 text-sm text-white bg-blue-500 rounded-r-md">
          검색
        </button>
      </div>

      <section className="flex flex-col gap-5 mt-14">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>
    </main>
  )
}

export default Content