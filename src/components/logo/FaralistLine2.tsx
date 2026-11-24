import React from 'react';
import { FaralistPartProps } from './types';

/**
 * بخش سوم لوگوی فرالیست: خط دوم (وسط)
 * Part 3: Middle Line
 */
export const FaralistLine2: React.FC<FaralistPartProps> = ({
  className = '',
  style,
  color = '#292669',
}) => {
  return (
    <rect
      id="faralist-line-2"
      className={className}
      style={style}
      x="221"
      y="282"
      width="134"
      height="25"
      rx="12.5"
      fill={color}
    />
  );
};
