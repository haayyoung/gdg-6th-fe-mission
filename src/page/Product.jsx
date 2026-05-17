import { useEffect, useState } from 'react'
import { getSortedData } from '../apis/shopApi'
import Item from '../components/Item'
import Footer from '../components/Footer'

function Product() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchSortedData = async () => {
      const data = await getSortedData()

      const sortedItems = [...data].sort((a, b) =>
        a.itemName.localeCompare(b.itemName, 'ko')
      )

      setItems(sortedItems)
    }

    fetchSortedData()
  }, [])

  return (
    <main className="flex flex-col items-center pt-10">
      <select className="w-40 px-4 py-2 mb-10 text-sm border border-gray-300 rounded-md">
        <option>정렬 기준 선택</option>
        <option>이름 오름차순</option>
      </select>

      <section className="flex flex-col gap-5">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>

      <Footer />
    </main>
  )
}

export default Product