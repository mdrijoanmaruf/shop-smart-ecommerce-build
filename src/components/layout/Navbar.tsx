import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
  items: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
}

export const Navbar: React.FC<NavbarProps> = ({ className, items }) => {
  return (
    <nav className={cn("flex items-center space-x-6", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            item.active 
              ? "text-foreground" 
              : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};