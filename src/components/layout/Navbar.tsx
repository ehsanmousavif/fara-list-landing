import React, { useState } from 'react';
import { FaralistLogo } from '@/components/logo';
import { Button } from '@/components/ui';
import { Menu, X, PlayCircle, BookOpen, Sparkles } from 'lucide-react';

interface NavbarProps {
  onTriggerLoading?: () => void;
  onOpenBlog: () => void;
  onNavigateSection: (sectionId: string) => void;
  isBlogPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onTriggerLoading,
  onOpenBlog,
  onNavigateSection,
  isBlogPage = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ویژگی‌ها', id: 'features' },
    { label: 'دموی زنده', id: 'demo' },
    { label: 'نحوه کارکرد', id: 'how-it-works' },
    { label: 'تعرفه‌ها', id: 'pricing' },
    { label: 'سوالات متداول', id: 'faq' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  const handleBlogClick = () => {
    setMobileMenuOpen(false);
    onOpenBlog();
  };

  return (
    <header className="fixed top-3 sm:top-4 lg:top-5 inset-x-3 sm:inset-x-6 lg:inset-x-8 max-w-6xl mx-auto z-50 transition-all pointer-events-none">
      <div className="w-full h-16 sm:h-18 px-4 sm:px-6 rounded-2xl sm:rounded-3xl bg-white/85 backdrop-blur-2xl backdrop-saturate-180 border-none shadow-none flex items-center justify-between gap-4 pointer-events-auto">
        {/* برند و لوگوی فرالیست */}
        <button
          onClick={() => {
            if (isBlogPage) {
              handleLinkClick('');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-3 group focus:outline-none cursor-pointer border-none bg-transparent shrink-0"
          aria-label="صفحه اصلی فرالیست"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#f5f4fd] rounded-xl overflow-hidden shrink-0">
            <FaralistLogo size={32} animate={false} />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-base sm:text-lg font-black tracking-tight text-black group-hover:text-[#3525cd] transition-colors leading-tight whitespace-nowrap">
              فرالیست
            </span>
            <span className="text-[10px] text-black/50 tracking-wider uppercase font-semibold whitespace-nowrap">
              Fara List
            </span>
          </div>
        </button>

        {/* منوی ناوبری دسکتاپ */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-sm font-medium px-3.5 py-2 rounded-xl text-black/70 hover:text-black hover:bg-[#f5f4fd] transition-colors border-none bg-transparent cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}

          {/* پیوند دمو به صفحه جداگانه وبلاگ */}
          <button
            onClick={handleBlogClick}
            className={`text-sm font-bold px-3.5 py-2 rounded-xl transition-all border-none cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              isBlogPage
                ? 'bg-[#3525cd] text-white'
                : 'text-[#3525cd] bg-[#eae9fb] hover:bg-[#dedcf9]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>وبلاگ</span>
            <span className="text-[10px] bg-[#3525cd] text-white px-1.5 py-0.5 rounded-full font-bold leading-none">
              جدید
            </span>
          </button>
        </nav>

        {/* دکمه‌های اکشن دسکتاپ */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {onTriggerLoading && (
            <Button
              variant="surface"
              size="sm"
              onClick={onTriggerLoading}
              className="text-black bg-[#f5f4fd] hover:bg-[#eae9fb] whitespace-nowrap"
              title="مشاهده مجدد انیمیشن لود لوگو"
            >
              <PlayCircle className="w-4 h-4 text-[#3525cd] ml-1.5" />
              <span>تست لودینگ</span>
            </Button>
          )}

          <Button
            variant="primary"
            size="sm"
            onClick={() => handleLinkClick('cta')}
            className="whitespace-nowrap"
          >
            شروع رایگان
          </Button>
        </div>

        {/* دکمه‌های منوی موبایل */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* دکمه سریع وبلاگ در هدر موبایل */}
          <button
            onClick={handleBlogClick}
            className={`text-xs font-bold px-2.5 py-2 rounded-xl flex items-center gap-1 border-none cursor-pointer whitespace-nowrap ${
              isBlogPage
                ? 'bg-[#3525cd] text-white'
                : 'bg-[#eae9fb] text-[#3525cd]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>وبلاگ</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f5f4fd] text-black hover:bg-[#eae9fb] transition-colors border-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* دراور / منوی کشویی بازشونده موبایل با افکت مات شیشه‌ای شناور بدون بوردر */}
      {mobileMenuOpen && (
        <div className="mt-2 w-full rounded-2xl bg-white/95 backdrop-blur-2xl px-4 py-4 border-none shadow-none space-y-2 pointer-events-auto max-h-[calc(100vh-100px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-sm font-medium px-4 py-3 rounded-xl text-black hover:text-[#3525cd] bg-[#f5f4fd] active:bg-[#eae9fb] transition-colors text-right border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            {/* لینک وبلاگ در موبایل */}
            <button
              onClick={handleBlogClick}
              className="text-sm font-bold px-4 py-3 rounded-xl bg-[#eae9fb] text-[#3525cd] active:bg-[#dedcf9] transition-colors text-right border-none cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#3525cd]" />
                <span>وبلاگ و دانستنی‌های فرالیست</span>
              </div>
              <span className="text-[10px] bg-[#3525cd] text-white px-2 py-0.5 rounded-full font-bold">
                جدید
              </span>
            </button>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            {onTriggerLoading && (
              <Button
                variant="surface"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTriggerLoading();
                }}
                className="w-full text-black bg-[#f5f4fd]"
              >
                <PlayCircle className="w-4 h-4 text-[#3525cd] ml-1.5" />
                <span>مشاهده انیمیشن لود لوگو</span>
              </Button>
            )}

            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                handleLinkClick('cta');
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
