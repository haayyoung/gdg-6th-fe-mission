export const getItemData = async () => {
  const response = await fetch('/data/item.json')
  const data = await response.json()

  return data
}

export const getCategoryData = async () => {
  const response = await fetch('/data/category.json')
  const data = await response.json()

  return data
}

export const getPriceSelectedData = async () => {
  const response = await fetch('/data/priceSelected.json')
  const data = await response.json()

  return data
}

export const getSortedData = async () => {
  const response = await fetch('/data/sorted.json')
  const data = await response.json()

  return data
}