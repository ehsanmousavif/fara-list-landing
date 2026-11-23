"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaralistLogo } from "@/components/logo";
import { Button } from "@/components/ui";
import { Menu, X, PlayCircle, BookOpen, ChevronDown } from "lucide-react";

interface NavbarProps {
  onTriggerLoading?: () => void;
  onOpenBlog?: () => void;
  onNavigateSection?: (sectionId: string) => void;
  isBlogPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onTriggerLoading,
  onOpenBlog,
  onNavigateSection,
  isBlogPage: propIsBlogPage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const isBlogPage = propIsBlogPage ?? pathname.startsWith("/blog");

  // بستن دراپ‌داون دسکتاپ هنگام کلیک در خارج از آن
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
    };

    if (desktopDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopDropdownOpen]);

  const navLinks = [
    { label: "ویژگی‌ها", id: "features" },
    { label: "دموی زنده", id: "demo" },
    { label: "نحوه کارکرد", id: "how-it-works" },
    { label: "تعرفه‌ها", id: "pricing" },
    { label: "سوالات متداول", id: "faq" },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
    if (onNavigateSection) {
      onNavigateSection(id);
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.history.pushState(null, "", `/#${id}`);
      }
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
    if (pathname !== "/") {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBlogClick = () => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
    if (onOpenBlog) {
      onOpenBlog();
    } else {
      router.push("/blog");
    }
  };

  return (
    <header className="fixed top-3 sm:top-4 lg:top-5 inset-x-3 sm:inset-x-6 lg:inset-x-8 max-w-6xl mx-auto z-50 transition-all pointer-events-none">
      <div className="w-full h-16 sm:h-18 px-4 sm:px-6 rounded-2xl sm:rounded-3xl bg-[#000]/50 backdrop-blur-2xl backdrop-saturate-180 border-none shadow-none flex items-center justify-between gap-4 pointer-events-auto">
        {/* برند و لوگوی فرالیست */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group focus:outline-none cursor-pointer border-none bg-transparent shrink-0"
          aria-label="صفحه اصلی فرالیست"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#f5f4fd] rounded-xl overflow-hidden shrink-0">
            <FaralistLogo size={32} animate={false} />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-base sm:text-lg font-white tracking-tight text-white group-hover:text-[#3525cd] transition-colors leading-tight whitespace-nowrap">
              فرالیست
            </span>
            <span className="text-[10px] text-white/50 tracking-wider uppercase font-semibold whitespace-nowrap">
              Fara List
            </span>
          </div>
        </button>

        {/* منوی ناوبری دسکتاپ */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLinkClick(link.id)}
              className="text-sm font-medium px-3.5 py-2 rounded-xl text-white/70 hover:text-white hover:bg-[#f5f4fd] transition-colors border-none bg-transparent cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}

          {/* منوی دراپ‌داون دسکتاپ شامل وبلاگ با آیکون بنفش سکشن‌ها */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
              className={`text-sm font-medium px-3.5 py-2 rounded-xl transition-all border-none cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                isBlogPage || desktopDropdownOpen
                  ? "text-white bg-white/15"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>بیشتر</span>
              <span className="w-5 h-5 rounded-md bg-[#eae9fb] flex items-center justify-center">
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#0D0751] transition-transform duration-200 ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            {/* محتوای دراپ‌داون */}
            {desktopDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 rounded-2xl bg-white p-2 shadow-2xl border-none z-50 text-right animate-in fade-in-50 zoom-in-95 duration-150">
                <button
                  type="button"
                  onClick={handleBlogClick}
                  className="w-full text-right p-3 rounded-xl hover:bg-[#f5f4fd] active:bg-[#eae9fb] transition-colors flex items-center justify-between border-none cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#eae9fb] flex items-center justify-center text-[#0D0751] group-hover:bg-[#0D0751] group-hover:text-white transition-colors">
                      <BookOpen className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-sm font-bold text-black leading-tight">
                        وبلاگ فرالیست
                      </span>
                      <span className="text-[11px] text-black/55 mt-0.5">
                        راهنماها، مقالات و ترفندها
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#0D0751] text-white px-2 py-0.5 rounded-full font-bold">
                    جدید
                  </span>
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* دکمه‌های اکشن دسکتاپ */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {onTriggerLoading && (
            <Button
              variant="surface"
              size="sm"
              onClick={onTriggerLoading}
              className="text-white bg-[#f5f4fd] hover:bg-[#eae9fb] whitespace-nowrap"
              title="مشاهده مجدد انیمیشن لود لوگو"
            >
              <PlayCircle className="w-4 h-4 text-[#3525cd] ml-1.5" />
              <span>تست لودینگ</span>
            </Button>
          )}

          <Button
            variant="primary"
            size="sm"
            onClick={() => handleLinkClick("cta")}
            className="whitespace-nowrap"
          >
            شروع رایگان
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#eae9fb] hover:bg-[#dedcf9] active:scale-95 transition-all border-none cursor-pointer"
            aria-label={mobileMenuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#0D0751]" />
            ) : (
              <Menu className="w-5 h-5 text-[#0D0751]" />
            )}
          </button>
        </div>
      </div>

      {/* منوی کشویی بازشونده موبایل */}
      {mobileMenuOpen && (
        <div className="mt-2 w-full rounded-2xl bg-black/10 backdrop-blur-2xl px-4 py-4 border-none shadow-none space-y-2 pointer-events-auto max-h-[calc(100vh-100px)] overflow-y-auto lg:hidden">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className="text-sm font-medium px-4 py-3 rounded-xl text-black hover:text-[#0D0751] bg-[#f5f4fd] active:bg-[#eae9fb] transition-colors text-right border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            {/* لینک وبلاگ درون دراپ‌داون منوی موبایل */}
            <button
              type="button"
              onClick={handleBlogClick}
              className="text-sm font-bold px-4 py-3 rounded-xl bg-[#eae9fb] text-[#0D0751] active:bg-[#dedcf9] transition-colors text-right border-none cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#0D0751]" />
                <span>وبلاگ و دانستنی‌های فرالیست</span>
              </div>
              <span className="text-[10px] bg-[#0D0751] text-white px-2 py-0.5 rounded-full font-bold">
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
                handleLinkClick("cta");
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

export default Navbar;
