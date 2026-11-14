import React from 'react';
import { FaralistPartProps } from './types';

/**
 * بخش دوم لوگوی فارالیست: خط اول (بالا)
 * Part 2: Top Line
 */
export const FaralistLine1: React.FC<FaralistPartProps> = ({
  className = '',
  style,
  color = '#292669',
}) => {
  return (
    <rect
      id="faralist-line-1"
      className={className}
      style={style}
      x="238"
      y="234"
      width="134"
      height="25"
      rx="12.5"
      fill={color}
    />
  );
};
