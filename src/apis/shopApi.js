const BASE_URL = 'http://192.168.134.160:8080'

const fetchJson = async (url) => {
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export const getItemData = () => {
  return fetchJson('/data/item.json')
}

export const getCategoryData = () => {
  return fetchJson('/data/category.json')
}

export const getPriceSelectedData = () => {
  return fetchJson('/data/priceSelected.json')
}

export const getSortedData = () => {
  return fetchJson('/data/sorted.json')
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