import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'surface' | 'elevated' | 'inverted';
  className?: string;
}

/**
 * کارت تخت (Flat Design System)
 * زمینه سایت مشکی و کارت‌ها بر پایه رنگ برند #030430
 * بدون بوردر، بدون سایه
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-[#030430]/70 text-white',
    surface: 'bg-[#030430] text-white',
    elevated: 'bg-[#030430] text-white',
    inverted: 'bg-white text-[#030430]',
  };

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 border-none shadow-none ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
