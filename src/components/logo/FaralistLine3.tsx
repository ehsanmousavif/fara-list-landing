import React from 'react';
import { FaralistPartProps } from './types';

/**
 * بخش چهارم لوگوی فرالیست: خط سوم (نقطه + خط افقی پایین)
 * Part 4: Bottom Line (Dot + Bar)
 */
export const FaralistLine3: React.FC<FaralistPartProps> = ({
  className = '',
  style,
  color = '#292669',
}) => {
  return (
    <g id="faralist-line-3" className={className} style={style}>
      {/* نقطه / کپسول کوچک سمت چپ */}
      <rect
        id="faralist-dot"
        x="203"
        y="331"
        width="30"
        height="25"
        rx="12.5"
        fill={color}
      />
      {/* خط افقی سمت راست */}
      <rect
        id="faralist-bar"
        x="238"
        y="331"
        width="99"
        height="25"
        rx="12.5"
        fill={color}
      />
    </g>
  );
};
