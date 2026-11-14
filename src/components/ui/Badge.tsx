import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'surface' | 'inverted';
  className?: string;
}

/**
 * نشان و بج تخت (Flat Design System)
 * مبتنی بر رنگ #030430 و سفید
 * بدون بوردر، بدون سایه
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const styles = {
    primary: 'bg-[#030430] text-white font-medium',
    surface: 'bg-[#030430]/70 text-white/90',
    inverted: 'bg-white text-[#030430] font-bold',
  };

  return (
    <span
      className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border-none shadow-none ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
