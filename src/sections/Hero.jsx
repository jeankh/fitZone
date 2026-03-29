import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Play, ArrowLeft, ArrowRight, Check, Download, Star } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const avatars = [
  { letter: 'أ', color: 'from-blue-500 to-blue-700' },
  { letter: 'س', color: 'from-pink-500 to-pink-700' },
  { letter: 'م', color: 'from-purple-500 to-purple-700' },
  { letter: 'ن', color: 'from-green-500 to-green-700' },
]

export default function Hero() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight

  const guarantees = [
    { icon: Check, text: t('hero.guarantee1') },
    { icon: Check, text: t('hero.guarantee2') },
    { icon: Check, text: t('hero.guarantee3') },
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative pt-28 lg:pt-32 pb-8 lg:pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center">
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatar.color} border-[3px] border-background flex items-center justify-center text-sm font-semibold text-white ${lang === 'ar' ? '-mr-3 first:mr-0' : '-ml-3 first:ml-0'} hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
                  >
                    {avatar.letter}
                  </div>
                ))}
                <div className={`w-9 h-9 rounded-full bg-white/10 border-[3px] border-background flex items-center justify-center text-[11px] font-semibold text-white ${lang === 'ar' ? '-mr-3' : '-ml-3'}`}>
                  +1K
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-text-secondary">{t('hero.rating')}</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight"
            >
              {t('hero.headline1')}
              <br />
              <span className="text-gradient">{t('hero.headline2')}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary leading-relaxed mb-10 max-w-lg font-tajawal"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('books')}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-brand to-brand-dark text-white px-8 py-4 rounded-2xl text-lg font-bold glow-brand hover:glow-brand-hover transition-all group"
              >
                <span>{t('hero.cta1')}</span>
                <Arrow size={20} className={`transition-transform ${lang === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('transformations')}
                className="flex items-center justify-center gap-3 bg-white/5 border border-border text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 hover:border-border-hover transition-all group"
              >
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand/20 group-hover:text-brand transition-all">
                  <Play size={18} fill="currentColor" />
                </span>
                <span>{t('hero.cta2')}</span>
              </motion.button>
            </motion.div>

            {/* Guarantees */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              {guarantees.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-text-secondary hover:text-white transition-colors">
                  <span className="w-6 h-6 rounded-full bg-accent-green/15 flex items-center justify-center">
                    <item.icon size={14} className="text-accent-green" />
                  </span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            {/* Floating badge — downloads */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 right-4 bg-surface border border-border rounded-2xl px-4 py-3 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 bg-accent-green rounded-xl flex items-center justify-center">
                <Download size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">5000+</p>
                <p className="text-text-muted text-xs">{t('hero.downloads')}</p>
              </div>
            </motion.div>

            {/* Floating badge — review */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-4 left-4 bg-surface border border-border rounded-2xl px-4 py-3 z-20"
            >
              <div className="flex gap-0.5 text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/80 text-sm font-medium">"{t('hero.review')}"</p>
            </motion.div>

            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
              <img
                src="/fitzone-hero.jpeg"
                alt="FitZone"
                className="w-full max-w-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
