import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import '@/index.css';

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
  return (
    <html lang="fa" dir="rtl">
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
      </head>
      <body className="bg-white text-black min-h-screen antialiased selection:bg-[#3525cd] selection:text-white flex flex-col justify-between">
        {/* هدر ناوبری یکپارچه در سطح لای‌اوت اپ‌روتر */}
        <Navbar />

        {/* محتوای صفحات بر اساس مسیر روت */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* فوتر مینیمال سراسری */}
        <Footer />
      </body>
    </html>
  );
}
