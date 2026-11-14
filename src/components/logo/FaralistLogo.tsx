import React from 'react';
import { FaralistLogoProps, LogoSpeed } from './types';
import { FaralistRibbon } from './FaralistRibbon';
import { FaralistLine1 } from './FaralistLine1';
import { FaralistLine2 } from './FaralistLine2';
import { FaralistLine3 } from './FaralistLine3';

const SPEED_SECONDS: Record<LogoSpeed, number> = {
  fast: 1.6,
  normal: 2.4,
  slow: 3.6,
};

/**
 * کامپوننت کامل لوگوی فارالیست مرکب از ۴ جزء مستقل
 * با پشتیبانی از حالت استاتیک یا انیمیشن مرحله‌ای متوالی
 */
export const FaralistLogo: React.FC<FaralistLogoProps> = ({
  size = 120,
  className = '',
  animate = false,
  isLooping = true,
  speed = 'normal',
  style,
  ...props
}) => {
  const durationSec = SPEED_SECONDS[speed] || 2.4;

  const ribbonStyle: React.CSSProperties | undefined = animate
    ? isLooping
      ? { animation: `faralist-ribbon-loop ${durationSec}s cubic-bezier(0.4, 0, 0.2, 1) infinite` }
      : { animation: `faralist-ribbon-once ${durationSec * 0.3}s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` }
    : undefined;

  const line1Style: React.CSSProperties | undefined = animate
    ? isLooping
      ? { animation: `faralist-line1-loop ${durationSec}s cubic-bezier(0.4, 0, 0.2, 1) infinite` }
      : { animation: `faralist-line-once ${durationSec * 0.25}s ease-out ${durationSec * 0.3}s forwards`, opacity: 0 }
    : undefined;

  const line2Style: React.CSSProperties | undefined = animate
    ? isLooping
      ? { animation: `faralist-line2-loop ${durationSec}s cubic-bezier(0.4, 0, 0.2, 1) infinite` }
      : { animation: `faralist-line-once ${durationSec * 0.25}s ease-out ${durationSec * 0.5}s forwards`, opacity: 0 }
    : undefined;

  const line3Style: React.CSSProperties | undefined = animate
    ? isLooping
      ? { animation: `faralist-line3-loop ${durationSec}s cubic-bezier(0.4, 0, 0.2, 1) infinite` }
      : { animation: `faralist-line-once ${durationSec * 0.25}s ease-out ${durationSec * 0.7}s forwards`, opacity: 0 }
    : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
      width={size}
      height={size}
      className={`overflow-visible ${animate ? 'animate-pulse-gentle' : ''} ${className}`}
      style={{ display: 'inline-block', ...style }}
      {...props}
    >
      {/* بخش ۱: روبان بنفش */}
      <FaralistRibbon style={ribbonStyle} />

      {/* بخش ۲: خط اول بالا */}
      <FaralistLine1 style={line1Style} />

      {/* بخش ۳: خط دوم وسط */}
      <FaralistLine2 style={line2Style} />

      {/* بخش ۴: خط سوم پایین */}
      <FaralistLine3 style={line3Style} />
    </svg>
  );
};
