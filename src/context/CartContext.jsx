import { createContext, useContext, useState } from 'react'

const INDIVIDUAL_BOOKS = ['transformation', 'nutrition']
const BUNDLE_ID = 'bundle'
const BUNDLE_PRICE = 149

const BOOKS_DATA = {
  transformation: {
    id: 'transformation',
    icon: '💪',
    image: '/fitzone-workout.jpeg',
    titleAr: 'الدليل الشامل للتنشيف وبناء الجسم',
    titleEn: 'Complete Shredding & Building Guide',
    price: 79,
  },
  nutrition: {
    id: 'nutrition',
    icon: '🥗',
    image: '/fitzone-nutrition.jpeg',
    titleAr: 'الدليل الكامل لخسارة الدهون',
    titleEn: 'Complete Fat Loss Guide',
    price: 79,
  },
  bundle: {
    id: 'bundle',
    icon: '🎁',
    image: '/fitzone-workout.jpeg',
    image2: '/fitzone-nutrition.jpeg',
    titleAr: 'الباقة الكاملة',
    titleEn: 'Complete Bundle',
    price: BUNDLE_PRICE,
  },
}

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [wasAutoUpgraded, setWasAutoUpgraded] = useState(false)

  const addToCart = (item) => {
    const id = typeof item === 'string' ? item : item.id

    setCart(prev => {
      if (prev.includes(id)) return prev

      // Adding bundle directly → no upgrade banner
      if (id === BUNDLE_ID) {
        setWasAutoUpgraded(false)
        return [BUNDLE_ID]
      }

      const next = [...prev, id]

      // If both individual books are now in cart → auto-upgrade to bundle
      const hasAll = INDIVIDUAL_BOOKS.every(b => next.includes(b))
      if (hasAll) {
        setWasAutoUpgraded(true)
        return [BUNDLE_ID]
      }

      setWasAutoUpgraded(false)
      return next
    })
  }

  const removeFromCart = (id) => {
    setWasAutoUpgraded(false)
    setCart(prev => prev.filter(item => item !== id))
  }

  const clearCart = () => setCart([])

  const isInCart = (id) => cart.includes(id)

  const getTotal = () =>
    cart.reduce((sum, id) => sum + (BOOKS_DATA[id]?.price || 0), 0)

  const getSavings = () => {
    if (!cart.includes(BUNDLE_ID)) return 0
    // Bundle saves vs buying both individually
    const individualTotal = INDIVIDUAL_BOOKS.reduce((sum, id) => sum + BOOKS_DATA[id].price, 0)
    return individualTotal - BUNDLE_PRICE
  }

  // Which individual book is missing (for upsell suggestion)
  const getMissingBook = () => {
    if (cart.includes(BUNDLE_ID)) return null
    const inCart = INDIVIDUAL_BOOKS.filter(id => cart.includes(id))
    if (inCart.length !== 1) return null
    return INDIVIDUAL_BOOKS.find(id => !cart.includes(id))
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
      getMissingBook,
      wasAutoUpgraded,
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
