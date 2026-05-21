const BASE_URL = 'http://192.168.134.160:8080'

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

export const createProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/admin/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })

  return response
}