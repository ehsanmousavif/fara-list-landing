import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'surface' | 'ghost' | 'inverted' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
  children?: React.ReactNode;
}

/**
 * دکمه تخت (Flat Design System)
 * بدون هیچ‌گونه بوردر و بدون سایه
 * مبتنی بر رنگ‌های اصلی: Primary (#3525cd)، Secondary (#eae9fb)
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all cursor-pointer select-none active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none border-none outline-none';

    const sizeStyles = {
      sm: 'text-xs h-9 px-3.5 gap-1.5',
      md: 'text-sm h-11 px-5 gap-2',
      lg: 'text-base h-13 px-7 gap-2.5',
      icon: 'h-10 w-10 p-0',
      'icon-sm': 'h-8 w-8 p-0 text-xs',
      'icon-lg': 'h-12 w-12 p-0 text-base',
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
      white:
        'bg-white text-black font-bold hover:bg-white/90 active:bg-white/80',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
