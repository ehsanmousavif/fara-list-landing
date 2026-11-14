import { SVGProps } from 'react';

export type LogoSpeed = 'slow' | 'normal' | 'fast';

export interface FaralistLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  animate?: boolean;
  isLooping?: boolean;
  speed?: LogoSpeed;
}

export interface FaralistPartProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}
