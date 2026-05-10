import { priceSelectedData } from '../data/mockData'
import Item from '../components/Item'
import Footer from '../components/Footer'

function Price() {
  return (
    <main className="flex flex-col items-center pt-10">
      <div className="flex gap-4 mb-10">
        <input
          type="number"
          defaultValue={priceSelectedData.low}
          className="w-32 px-4 py-2 text-sm border border-gray-300 rounded-md outline-none"
        />

        <input
          type="number"
          defaultValue={priceSelectedData.high}
          className="w-32 px-4 py-2 text-sm border border-gray-300 rounded-md outline-none"
        />

        <button className="px-6 py-2 text-sm text-white bg-blue-500 rounded-md">
          검색
        </button>
      </div>

      <section className="flex flex-col gap-5">
        {priceSelectedData.items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>

      <Footer />
    </main>
  )
}

export default Price