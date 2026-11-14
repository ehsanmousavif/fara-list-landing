import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'surface' | 'elevated' | 'inverted';
  className?: string;
}

/**
 * کارت تخت (Flat Design System)
 * زمینه سایت سفید و کارت‌ها بر پایه رنگ‌های ملایم سازگار با پس‌زمینه سفید، متن‌ها کاملاً مشکی
 * بدون بوردر، بدون سایه
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-[#f8f7fc] text-black',
    surface: 'bg-[#f4f3fb] text-black',
    elevated: 'bg-[#eeedfa] text-black',
    inverted: 'bg-[#3525cd] text-white',
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
