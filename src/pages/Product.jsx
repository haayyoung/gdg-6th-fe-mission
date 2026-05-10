import { sortedData } from '../data/mockData'
import Item from '../components/Item'
import Footer from '../components/Footer'

function Product() {
  const sortedItems = [...sortedData].sort((a, b) =>
    a.itemName.localeCompare(b.itemName, 'ko')
  )

  return (
    <main className="flex flex-col items-center pt-10">
      <select className="w-40 px-4 py-2 mb-10 text-sm border border-gray-300 rounded-md">
        <option>정렬 기준 선택</option>
        <option>이름 오름차순</option>
      </select>

      <section className="flex flex-col gap-5">
        {sortedItems.map((item) => (
          <Item key={`${item.id}-${item.itemName}`} item={item} />
        ))}
      </section>

      <Footer />
    </main>
  )
}

export default Product