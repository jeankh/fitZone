# FitLife - موقع بيع الكتب الإلكترونية للياقة البدنية

موقع احترافي لبيع كتب اللياقة البدنية والتغذية، مبني بـ React + Tailwind CSS مع دعم كامل للغة العربية (RTL).

![FitLife Preview](https://via.placeholder.com/1200x630/09090b/f97316?text=FitLife+Ebooks)

## ✨ المميزات

- 🎨 **تصميم عصري** - Dark theme مع accents برتقالية
- 🌐 **دعم RTL كامل** - تصميم موجه للعربية أولاً
- 📱 **متجاوب بالكامل** - يعمل على جميع الأجهزة
- ⚡ **أداء عالي** - مبني على Vite للسرعة القصوى
- 🎭 **Animations سلسة** - باستخدام Framer Motion
- 🔤 **خطوط عربية** - Cairo + Tajawal من Google Fonts

## 🛠️ التقنيات المستخدمة

- **React 18** - مكتبة واجهات المستخدم
- **Vite** - أداة البناء السريعة
- **Tailwind CSS** - إطار CSS
- **Framer Motion** - مكتبة الحركات
- **Lucide React** - أيقونات

## 🚀 التثبيت والتشغيل

### المتطلبات
- Node.js 18+ 
- npm أو yarn أو pnpm

### خطوات التثبيت

```bash
# 1. انسخ المشروع
cd fitlife-ebooks

# 2. ثبّت الحزم
npm install

# 3. شغّل خادم التطوير
npm run dev

# 4. افتح المتصفح على
# http://localhost:3000
```

### البناء للإنتاج

```bash
# بناء المشروع
npm run build

# معاينة البناء
npm run preview
```

## 📁 هيكل المشروع

```
fitlife-ebooks/
├── public/
├── src/
│   ├── components/        # مكونات قابلة لإعادة الاستخدام
│   │   ├── Header.jsx
│   │   └── WhatsAppButton.jsx
│   ├── sections/          # أقسام الصفحة الرئيسية
│   │   ├── Hero.jsx
│   │   ├── Transformations.jsx
│   │   ├── Books.jsx
│   │   ├── Coach.jsx
│   │   ├── FAQ.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── lib/
│   │   └── utils.js       # دوال مساعدة
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 التخصيص

### تغيير الألوان

عدّل الألوان في `tailwind.config.js`:

```js
colors: {
  brand: {
    DEFAULT: '#f97316',  // اللون الرئيسي
    light: '#fb923c',
    dark: '#ea580c',
  },
  // ...
}
```

### تغيير المحتوى

1. **معلومات المدرب** - عدّل `src/sections/Coach.jsx`
2. **الكتب والأسعار** - عدّل `src/sections/Books.jsx`
3. **شهادات العملاء** - عدّل `src/sections/Transformations.jsx`
4. **الأسئلة الشائعة** - عدّل `src/sections/FAQ.jsx`

### إضافة صور حقيقية

استبدل الـ emojis بصور حقيقية:

```jsx
// بدلاً من
<span className="text-7xl">💪</span>

// استخدم
<img src="/images/coach.jpg" alt="المدرب" className="w-full h-full object-cover" />
```

## 🔗 ربط بوابة الدفع

الموقع جاهز للربط مع:
- **Stripe** - للدفع العالمي
- **Moyasar** - للدفع في السعودية
- **Tap** - للدفع في الخليج

## 📱 رقم الواتساب

غيّر رقم الواتساب في:
- `src/components/WhatsAppButton.jsx`
- `src/sections/FAQ.jsx`

```jsx
href="https://wa.me/966XXXXXXXXX"
```

## 🌐 النشر

### Vercel (موصى به)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# ارفع مجلد dist إلى Netlify
```

## 📝 الترخيص

هذا المشروع مرخص للاستخدام الشخصي والتجاري.

---

صُنع بـ ❤️ للمدربين العرب
