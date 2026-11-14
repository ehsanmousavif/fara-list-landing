import React, { useState } from 'react';
import { FaralistLogo } from '@/components/logo';
import { Button } from '@/components/ui';
import { Menu, X, PlayCircle } from 'lucide-react';

interface NavbarProps {
  onTriggerLoading: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTriggerLoading }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ویژگی‌ها', href: '#features' },
    { label: 'دموی زنده', href: '#demo' },
    { label: 'تخفیف ۱۰٪', href: '#discount' },
    { label: 'نحوه کارکرد', href: '#how-it-works' },
    { label: 'مقایسه', href: '#comparison' },
    { label: 'تعرفه‌ها', href: '#pricing' },
    { label: 'سوالات متداول', href: '#faq' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-colors border-none shadow-none text-black">
      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between gap-4">
        {/* برند و لوگو */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="صفحه اصلی فرالیست"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-[#f5f4fd] rounded-xl overflow-hidden shrink-0">
            <FaralistLogo size={34} animate={false} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-black group-hover:text-[#3525cd] transition-colors">
              فرالیست
            </span>
            <span className="text-[10px] text-black/50 tracking-wider uppercase font-semibold">
              Fara List
            </span>
          </div>
        </a>

        {/* منوی دسکتاپ */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium px-3.5 py-2 rounded-xl text-black/70 hover:text-black hover:bg-[#f5f4fd] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* دکمه‌های اکشن دسکتاپ */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Button
            variant="surface"
            size="sm"
            onClick={onTriggerLoading}
            className="text-black bg-[#f5f4fd] hover:bg-[#eae9fb]"
            title="مشاهده انیمیشن لود لوگو"
          >
            <PlayCircle className="w-4 h-4 text-[#3525cd] ml-1.5" />
            <span>تست لودینگ</span>
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              const el = document.getElementById('demo');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            شروع رایگان
          </Button>
        </div>

        {/* دکمه منوی موبایل */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="surface"
            size="sm"
            onClick={onTriggerLoading}
            className="sm:hidden text-xs px-2.5 bg-[#f5f4fd] text-black"
            aria-label="تست لودینگ"
          >
            <PlayCircle className="w-4 h-4 text-[#3525cd]" />
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#f5f4fd] text-black hover:bg-[#eae9fb] transition-colors border-none"
            aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* پنل منوی بازشونده موبایل */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white px-4 pt-3 pb-6 border-none shadow-none space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm font-medium px-4 py-3 rounded-xl text-black hover:text-[#3525cd] bg-[#f5f4fd] active:bg-[#eae9fb] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('demo');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              شروع رایگان فرالیست
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
