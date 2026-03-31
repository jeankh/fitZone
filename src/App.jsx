import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import CartModal from './components/CartModal'
import CheckoutModal from './components/CheckoutModal'
import Footer from './sections/Footer'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import ResultsPage from './pages/ResultsPage'
import CheckoutPage from './pages/CheckoutPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import NotFoundPage from './pages/NotFoundPage'
import LegalPage from './pages/LegalPage'
import AdminPage from './pages/AdminPage'

export default function App() {
  const location = useLocation()
  const isAdmin = location.pathname === '/admin'

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollToTop />
      {!isAdmin && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<BooksPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/refund" element={<LegalPage type="refund" />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
      {!isAdmin && <CartModal />}
      {!isAdmin && <CheckoutModal />}
    </div>
  )
}
