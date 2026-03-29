import { motion } from 'framer-motion'
import { Check, MessageCircle, Clock, RefreshCw, Shield } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useNavigate } from 'react-router-dom'

const features = [
  {
    icon: Clock,
    ar: 'رد خلال 24 ساعة',
    en: 'Reply within 24 hours',
  },
  {
    icon: RefreshCw,
    ar: 'متابعة أسبوعية لتقدمك',
    en: 'Weekly progress check-in',
  },
  {
    icon: Check,
    ar: 'تعديل الخطة حسب نتائجك',
    en: 'Plan adjustments based on your results',
  },
  {
    icon: Shield,
    ar: 'دعم كامل لمدة شهر',
    en: 'Full support for one month',
  },
]

const chatMessages = [
  { from: 'client', ar: 'وين أبدأ إذا ما تمرنت قبل؟', en: "Where do I start if I've never trained before?" },
  { from: 'team', ar: 'ابدأ بالبرنامج الأول، راح أرسلك الجدول اليوم ✅', en: "Start with the first program, I'll send you the schedule today ✅" },
  { from: 'client', ar: 'كيف أعرف إذا التمرين صح؟', en: 'How do I know if I\'m doing the exercise correctly?' },
  { from: 'team', ar: 'أرسلي فيديو وأصحح لك مباشرة 💪', en: 'Send me a video and I\'ll correct you directly 💪' },
  { from: 'client', ar: 'وش آكل قبل التمرين؟', en: 'What should I eat before training?' },
  { from: 'team', ar: 'كارب + بروتين قبل ساعة. عندك خيارات في الدليل 🥗', en: 'Carbs + protein 1 hour before. You have options in the guide 🥗' },
]

export default function WhatsAppSection() {
  const { lang, t } = useLanguage()
  const navigate = useNavigate()

  return (
    <section id="support" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <div className="inline-flex items-center gap-2 bg-[#25d366]/10 border border-[#25d366]/20 px-5 py-2 rounded-full mb-6">
              <MessageCircle size={16} className="text-[#25d366]" />
              <span className="text-[#25d366] text-sm font-semibold">
                {lang === 'ar' ? 'متابعة شخصية' : 'Personal Support'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              {lang === 'ar' ? 'مش لحالك في الرحلة' : "You're Not Alone in This Journey"}
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed mb-8 font-tajawal">
              {lang === 'ar'
                ? 'مع الباقة الكاملة تحصل على متابعة شخصية من فريق FitZone عبر الواتساب. نجيب على أسئلتك، نصحح مساركم، ونعدّل الخطة حسب تقدمك.'
                : 'With the complete bundle, you get personal follow-up from the FitZone team via WhatsApp. We answer your questions, correct your path, and adjust the plan based on your progress.'
              }
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-[#25d366]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon size={18} className="text-[#25d366]" />
                  </div>
                  <span className="text-white font-medium">{lang === 'ar' ? feature.ar : feature.en}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/programs')}
              className="flex items-center gap-3 bg-[#25d366] text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-[#25d366]/20 hover:bg-[#20bd5a] transition-all"
            >
              <MessageCircle size={20} />
              <span>{lang === 'ar' ? 'احصل على المتابعة الشخصية' : 'Get Personal Support'}</span>
            </motion.button>
          </motion.div>

          {/* Phone Mockup Side */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 flex justify-center"
          >
            <div className="relative w-72">
              {/* Phone frame */}
              <div className="bg-[#111b21] rounded-[2.5rem] border-4 border-[#2a2a2a] shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="bg-[#111b21] px-6 py-2 flex justify-between items-center">
                  <span className="text-white text-xs">9:41</span>
                  <div className="w-20 h-4 bg-[#111b21] rounded-full" />
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white/60 rounded-sm" />
                    <div className="w-1 h-2 bg-white/40 rounded-sm" />
                  </div>
                </div>

                {/* WhatsApp Header */}
                <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    FZ
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">FitZone Team</p>
                    <p className="text-[#25d366] text-xs">{lang === 'ar' ? 'متاح الآن' : 'online'}</p>
                  </div>
                </div>

                {/* Chat area */}
                <div className="bg-[#0b141a] p-3 space-y-2 min-h-[320px]">
                  {chatMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.15 }}
                      className={`flex ${msg.from === 'team' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                          msg.from === 'team'
                            ? 'bg-[#1f2c34] text-white rounded-tl-none'
                            : 'bg-[#005c4b] text-white rounded-tr-none'
                        }`}
                      >
                        {lang === 'ar' ? msg.ar : msg.en}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input bar */}
                <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-2">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2">
                    <p className="text-white/30 text-xs">{lang === 'ar' ? 'اكتب رسالة...' : 'Message...'}</p>
                  </div>
                  <div className="w-8 h-8 bg-[#25d366] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-white rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-surface border border-border rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl z-10"
              >
                <div className="w-9 h-9 bg-[#25d366]/15 rounded-xl flex items-center justify-center text-lg">
                  💬
                </div>
                <div>
                  <p className="text-white font-bold text-xs">{lang === 'ar' ? 'رد سريع' : 'Quick Reply'}</p>
                  <p className="text-text-muted text-xs">{lang === 'ar' ? 'خلال 24 ساعة' : 'Within 24h'}</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-surface border border-border rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl z-10"
              >
                <div className="w-9 h-9 bg-brand/15 rounded-xl flex items-center justify-center text-lg">
                  🏆
                </div>
                <div>
                  <p className="text-white font-bold text-xs">{lang === 'ar' ? '+1000 عميل' : '1000+ Clients'}</p>
                  <p className="text-text-muted text-xs">{lang === 'ar' ? 'تابعناهم بنجاح' : 'Successfully supported'}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
