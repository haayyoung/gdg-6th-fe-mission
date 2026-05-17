import { useEffect, useState } from 'react'
import { getCategoryData } from '../apis/shopApi'
import Item from '../components/Item'
import Footer from '../components/Footer'

function Category() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [items, setItems] = useState([])

  const categories = ['의류', '전자기기', '화장품', '식품']

  useEffect(() => {
    const fetchCategoryData = async () => {
      const data = await getCategoryData()
      setItems(data)
    }

    fetchCategoryData()
  }, [])

  const handleCategoryClick = (category) => {
    console.log(`${category} 카테고리 클릭`)
    setSelectedCategory(category)
  }

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  )

  return (
    <main className="flex flex-col items-center pt-10">
      <div className="flex flex-col w-[620px] mb-10">
        <button className="w-40 px-4 py-2 text-sm text-left border border-gray-300 rounded-t-md">
          카테고리 선택
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="w-40 px-4 py-2 text-sm text-left border border-gray-300 bg-gray-100 hover:bg-gray-200"
          >
            {category}
          </button>
        ))}
      </div>

      <section className="flex flex-col gap-5">
        {(selectedCategory === '' ? items : filteredItems).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>

      <Footer />
    </main>
  )
}

export default Category