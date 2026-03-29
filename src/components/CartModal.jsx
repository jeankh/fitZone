import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Trash2, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../context/LanguageContext'

export default function CartModal() {
  const { 
    cart, 
    removeFromCart, 
    getTotal, 
    getSavings, 
    isCartOpen, 
    setIsCartOpen,
    openCheckout,
    BOOKS_DATA 
  } = useCart()
  const { lang } = useLanguage()

  if (!isCartOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      >
        <motion.div
          initial={{ x: lang === 'ar' ? -400 : 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: lang === 'ar' ? -400 : 400, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} h-full w-full max-w-md bg-surface border-r border-border overflow-hidden`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <ShoppingBag size={24} className="text-brand" />
              <h2 className="text-xl font-bold text-white">
                {lang === 'ar' ? 'سلة المشتريات' : 'Shopping Cart'}
              </h2>
              <span className="bg-brand text-white text-xs font-bold px-2 py-1 rounded-full">
                {cart.length}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="p-6 flex-1 overflow-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="text-text-muted mx-auto mb-4" />
                <p className="text-text-secondary">
                  {lang === 'ar' ? 'السلة فارغة' : 'Cart is empty'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((bookId) => {
                  const book = BOOKS_DATA[bookId]
                  if (!book) return null
                  
                  return (
                    <motion.div
                      key={bookId}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex items-center gap-4 bg-white/[0.03] border border-border rounded-2xl p-4"
                    >
                      <div className="w-14 h-14 bg-brand/15 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                        {book.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm">
                          {lang === 'ar' ? book.titleAr : book.titleEn}
                        </h3>
                        <p className="text-brand font-bold">
                          {book.price} {lang === 'ar' ? 'ر.س' : 'SAR'}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(bookId)}
                        className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center hover:bg-red-500/20 transition-colors"
                      >
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </motion.div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-surface border-t border-border">
              {getSavings() > 0 && (
                <div className="flex items-center justify-between mb-4 bg-accent-green/10 border border-accent-green/20 rounded-xl p-3">
                  <span className="text-accent-green text-sm font-medium">
                    {lang === 'ar' ? 'وفّرت' : 'You saved'}
                  </span>
                  <span className="text-accent-green font-bold">
                    {getSavings()} {lang === 'ar' ? 'ر.س' : 'SAR'}
                  </span>
                </div>
              )}
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-text-secondary">
                  {lang === 'ar' ? 'المجموع' : 'Total'}
                </span>
                <span className="text-white text-2xl font-bold">
                  {getTotal()} <span className="text-base font-normal">{lang === 'ar' ? 'ر.س' : 'SAR'}</span>
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openCheckout}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-brand to-brand-dark text-white py-4 rounded-2xl font-bold text-lg glow-brand hover:glow-brand-hover transition-all group"
              >
                <span>{lang === 'ar' ? 'إتمام الشراء' : 'Checkout'}</span>
                <ArrowLeft size={20} className={`group-hover:${lang === 'ar' ? '-translate-x-1' : 'translate-x-1'} transition-transform`} />
              </motion.button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
