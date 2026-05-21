import { create } from 'zustand'

const useCartStore = create((set) => ({
  cartItems: [],

  addCartItem: (item, count) =>
  set((state) => {
    const updatedCart = [
      ...state.cartItems,
      {
        ...item,
        count,
      },
    ]

    console.log(updatedCart)

    return {
      cartItems: updatedCart,
    }
  }),
  
}))

export default useCartStore