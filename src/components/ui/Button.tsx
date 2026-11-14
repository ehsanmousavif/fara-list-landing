import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'surface' | 'ghost' | 'inverted' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * دکمه تخت (Flat Design System)
 * مبتنی بر دو رنگ #030430 و سفید #ffffff بر روی زمینه مشکی
 * بدون بوردر، بدون سایه
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
      'bg-white text-[#030430] font-bold hover:bg-white/90 active:bg-white/80',
    secondary:
      'bg-[#030430] text-white hover:bg-[#030430]/80 active:bg-[#030430]/70',
    surface:
      'bg-[#030430]/60 text-white hover:bg-[#030430]/90 active:bg-[#030430]',
    ghost:
      'bg-transparent text-white/80 hover:bg-[#030430]/40 active:bg-[#030430]/60',
    inverted:
      'bg-black text-white hover:bg-black/90 active:bg-black/80',
    outline:
      'bg-white/5 border border-white/20 text-white hover:bg-white/10 active:bg-white/15',
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
