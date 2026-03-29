import { createContext, useContext, useState } from 'react'

const BOOKS_DATA = {
  transformation: {
    id: 'transformation',
    icon: '💪',
    titleAr: 'خطة التحول الشامل',
    titleEn: 'Complete Transformation Plan',
    price: 149,
  },
  nutrition: {
    id: 'nutrition',
    icon: '🥗',
    titleAr: 'دليل التغذية الشامل',
    titleEn: 'Complete Nutrition Guide',
    price: 79,
  },
  workout: {
    id: 'workout',
    icon: '🏋️',
    titleAr: 'دليل التمارين المصور',
    titleEn: 'Illustrated Exercise Guide',
    price: 79,
  },
}

const BUNDLE_PRICE = 219

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const addToCart = (item) => {
    // Accept either a full item object or just an id string
    const id = typeof item === 'string' ? item : item.id
    if (!cart.includes(id)) {
      setCart(prev => [...prev, id])
    }
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.includes(id)
  }

  const getTotal = () => {
    if (cart.length === 3) return BUNDLE_PRICE
    return cart.reduce((sum, id) => sum + (BOOKS_DATA[id]?.price || 0), 0)
  }

  const getSavings = () => {
    if (cart.length < 3) return 0
    const fullPrice = cart.reduce((sum, id) => sum + (BOOKS_DATA[id]?.price || 0), 0)
    return fullPrice - BUNDLE_PRICE
  }

  const openCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      isInCart,
      getTotal,
      getSavings,
      isCartOpen,
      setIsCartOpen,
      isCheckoutOpen,
      setIsCheckoutOpen,
      openCheckout,
      BOOKS_DATA,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
