import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'surface' | 'ghost' | 'inverted' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * دکمه تخت (Flat Design System)
 * بدون هیچ‌گونه بوردر و بدون سایه
 * مبتنی بر رنگ‌های اصلی: Primary (#3525cd)، Secondary (#eae9fb)، پس‌زمینه مشکی و متن‌های سفید
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all cursor-pointer select-none active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none border-none outline-none';

  const sizeStyles = {
    sm: 'text-xs h-9 px-3.5 gap-1.5',
    md: 'text-sm h-11 px-5 gap-2',
    lg: 'text-base h-13 px-7 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#3525cd] text-white font-bold hover:bg-[#2d1fb5] active:bg-[#26199e]',
    secondary:
      'bg-[#eae9fb] text-[#3525cd] font-bold hover:bg-[#dedcf9] active:bg-[#d1cefa]',
    surface:
      'bg-[#f4f3fb] text-black hover:bg-[#eae9fb] active:bg-[#dedcf9]',
    ghost:
      'bg-transparent text-black hover:bg-black/5 active:bg-black/10',
    inverted:
      'bg-[#3525cd] text-white font-bold hover:bg-[#2d1fb5] active:bg-[#26199e]',
    outline:
      'bg-black/5 text-black hover:bg-black/10 active:bg-black/15',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
