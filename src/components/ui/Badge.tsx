import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'surface' | 'inverted';
  className?: string;
}

/**
 * نشان و بج تخت (Flat Design System)
 * مبتنی بر رنگ‌های #3525cd و #eae9fb
 * بدون بوردر، بدون سایه
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const styles = {
    primary: 'bg-[#3525cd] text-white font-medium',
    secondary: 'bg-[#eae9fb] text-[#3525cd] font-bold',
    surface: 'bg-[#f4f3fb] text-[#3525cd]',
    inverted: 'bg-[#3525cd] text-white font-bold',
  };

  return (
    <span
      className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border-none shadow-none ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
