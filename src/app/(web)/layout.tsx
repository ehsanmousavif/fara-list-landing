import type { Metadata, Viewport } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import '@/index.css';

export const viewport: Viewport = {
  themeColor: '#191458',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'فرالیست | ساخت کاتالوگ آنلاین و لیست قیمت لحظه‌ای',
  description:
    'به‌جای فایل PDF و پیام‌های پراکنده، کاتالوگ و لیست قیمت آنلاینت رو با فرالیست بساز؛ یک لینک ثابت که همیشه بروزه.',
  icons: {
    icon: '/assets/images/faralist-logo-original.png',
  },
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'فرالیست | FaraList',
    url: 'https://faralist.com',
    logo: 'https://faralist.com/assets/images/faralist-logo-original.png',
    description:
      'سامانه ساخت کاتالوگ آنلاین و لیست قیمت لحظه‌ای برای کسب‌وکارهای مدرن و عمده‌فروشان.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-21-00000000',
      contactType: 'customer support',
      availableLanguage: ['Persian'],
    },
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'فرالیست',
    operatingSystem: 'All',
    applicationCategory: 'BusinessApplication',
    url: 'https://faralist.com',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IRR',
    },
  };

  return (
    <html lang="fa-IR" dir="rtl" className="bg-[#191458]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="bg-white text-black min-h-screen antialiased selection:bg-[#191458] selection:text-white flex flex-col justify-between">
        {/* نوار پوشش فضای بالای اسکرین (Safe Area Top) به رنگ #191458 */}
        <div
          aria-hidden="true"
          className="fixed top-0 inset-x-0 h-[env(safe-area-inset-top,0px)] bg-[#191458] z-[9999] pointer-events-none"
        />

        {/* هدر ناوبری یکپارچه در سطح لای‌اوت اپ‌روتر */}
        <Navbar />

        {/* محتوای صفحات بر اساس مسیر روت */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* فوتر مینیمال سراسری */}
        <Footer />

        {/* نوار پوشش فضای پایین اسکرین (Safe Area Bottom) به رنگ #191458 */}
        <div
          aria-hidden="true"
          className="fixed bottom-0 inset-x-0 h-[env(safe-area-inset-bottom,0px)] bg-[#191458] z-[9999] pointer-events-none"
        />
      </body>
    </html>
  );
}
