import React, { useEffect, useState } from 'react';
import { FaralistLogo } from '@/components/logo';

interface LoadingScreenProps {
  isLoading: boolean;
  onFinish?: () => void;
  durationMs?: number;
}

/**
 * صفحه بارگذاری اختصاصی فرالیست
 * فقط شامل انیمیشن خود لوگو بر روی زمینه #030430
 * پس از پایان انیمیشن یک‌باره‌ی لوگو، اتمام را اعلام کرده و سایت نمایان می‌شود.
 */
export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isLoading,
  onFinish,
  durationMs = 2500,
}) => {
  const [visible, setVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const hideTimer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(hideTimer);
    }

    setVisible(true);

    // زمان‌بندی دقیق منطبق با پایان مراحل ورود ۴ بخشی لوگو
    const timer = setTimeout(() => {
      onFinish?.();
    }, durationMs);

    return () => clearTimeout(timer);
  }, [isLoading, durationMs, onFinish]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-600 ease-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="در حال بارگذاری فرالیست"
      role="dialog"
      aria-modal="true"
    >
      {/* فقط خود لوگو در مرکز صفحه */}
      <div className="flex items-center justify-center">
        <FaralistLogo
          size={160}
          animate={true}
          isLooping={false}
          speed="normal"
        />
      </div>
    </div>
  );
};
