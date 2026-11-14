export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  highlightColor: string;
}

export interface ProductMock {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  currentPrice: number;
  stock: 'موجود' | 'محدود' | 'ناموجود';
  lastUpdated: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  desc: string;
}
