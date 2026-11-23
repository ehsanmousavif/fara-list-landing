import React from 'react';

export default function Link({
  href,
  children,
  onClick,
  className,
  ...props
}: {
  href: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  [key: string]: any;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!href.startsWith('http') && !href.startsWith('#')) {
      e.preventDefault();
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}

export function useRouter() {
  return {
    push: (href: string) => {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    },
    replace: (href: string) => {
      window.history.replaceState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    },
    back: () => window.history.back(),
  };
}

export function usePathname() {
  return typeof window !== 'undefined' ? window.location.pathname : '/';
}

export function useSearchParams() {
  return typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();
}
