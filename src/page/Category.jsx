import { useEffect, useState } from 'react'
import { getCategoryData } from '../apis/shopApi'
import Item from '../components/Item'
import Footer from '../components/Footer'
import CategoryButton from '../components/CategoryButton'

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
        <CategoryButton isHeader>
          카테고리 선택
        </CategoryButton>

        {categories.map((category) => (
          <CategoryButton
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryButton>
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