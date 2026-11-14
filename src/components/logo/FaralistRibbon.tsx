import React from 'react';
import { FaralistPartProps } from './types';

/**
 * بخش اول لوگوی فارالیست: تیک / روبان بنفش تاخورده
 * Part 1: The stylized folded purple ribbon ('F' mark)
 */
export const FaralistRibbon: React.FC<FaralistPartProps> = ({
  className = '',
  style,
}) => {
  return (
    <g id="faralist-purple-mark" className={className} style={style}>
      <defs>
        {/* گرادیان باله و قوس پشتی روبان */}
        <linearGradient
          id="faralist-ribbon-gradient"
          x1="95%"
          y1="10%"
          x2="25%"
          y2="90%"
        >
          <stop offset="0%" stopColor="#6259FA" />
          <stop offset="25%" stopColor="#5149D2" />
          <stop offset="60%" stopColor="#3A349E" />
          <stop offset="85%" stopColor="#241E7A" />
          <stop offset="100%" stopColor="#1B1663" />
        </linearGradient>

        {/* گرادیان ستون جلویی برای افکت عمق سه‌بعدی */}
        <linearGradient
          id="faralist-pillar-gradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#655CFD" />
          <stop offset="35%" stopColor="#4E45DE" />
          <stop offset="75%" stopColor="#2C248A" />
          <stop offset="100%" stopColor="#171279" />
        </linearGradient>

        {/* سایه نرم برای تفکیک لایه تاخوردگی */}
        <filter
          id="faralist-fold-shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="-3"
            dy="0"
            stdDeviation="3.5"
            floodColor="#0E0B38"
            floodOpacity="0.45"
          />
        </filter>
      </defs>

      {/* مسیر روبان و باله بالایی */}
      <path
        d="M 287.8 93.1 c -79.2 0.8 -79.7 0.8 -93.8 8.3 -8.2 4.4 -14.2 9.7 -19.7 17.8 -7.2 10.6 -10.9 19.4 -13.2 31.8 -0.9 4.4 -3.1 32.8 -3.1 39.0 0.0 1.3 -3.7 1.5 -28.8 1.5 -28.2 -0.0 -28.8 -0.0 -33.2 2.4 -9.4 4.9 -15.6 13.2 -17.9 23.9 -0.6 2.9 -1.1 13.7 -1.1 24.0 0.0 10.3 -0.5 47.6 -1.2 83.0 -1.3 69.6 -1.2 70.4 3.9 78.6 3.7 5.8 8.0 9.6 14.2 12.5 5.3 2.5 6.4 2.6 22.1 2.6 15.5 -0.0 16.8 -0.1 21.5 -2.5 6.8 -3.3 12.3 -9.1 17.2 -18.0 10.4 -18.9 22.6 -56.5 28.3 -87.0 4.0 -21.6 5.0 -25.9 7.6 -34.2 3.9 -12.4 12.5 -29.8 21.2 -42.7 8.7 -13.0 26.2 -31.4 38.1 -40.2 l 7.4 -5.4 58.1 -0.0 c 57.2 -0.0 58.2 -0.0 63.8 -2.2 21.4 -8.0 40.7 -29.1 50.3 -54.8 3.9 -10.3 7.5 -27.2 7.5 -35.2 l 0.0 -4.3 -39.2 0.2 c -21.6 0.1 -71.1 0.5 -110.0 0.9 z"
        fill="url(#faralist-ribbon-gradient)"
      />

      {/* ستون تاخورده جلو */}
      <path
        d="M 116.5 190.0 L 158.0 190.0 L 158.0 376.5 C 158.0 399.4 139.4 418.0 116.5 418.0 C 93.6 418.0 75.0 399.4 75.0 376.5 L 75.0 231.5 C 75.0 208.6 93.6 190.0 116.5 190.0 Z"
        fill="url(#faralist-pillar-gradient)"
        filter="url(#faralist-fold-shadow)"
      />
    </g>
  );
};
