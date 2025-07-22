import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  className?: string;
  title: string;
  description?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  variant?: 'default' | 'gradient';
}

export const CallToAction: React.FC<CallToActionProps> = ({
  className,
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default'
}) => {
  return (
    <section className={cn(
      "py-16 px-4",
      variant === 'gradient' 
        ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground" 
        : "bg-muted",
      className
    )}>
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && (
          <p className={cn(
            "text-lg mb-8 leading-relaxed",
            variant === 'gradient' ? "text-primary-foreground/90" : "text-muted-foreground"
          )}>
            {description}
          </p>
        )}
        
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryAction && (
              <Button
                size="lg"
                onClick={primaryAction.onClick}
                variant={variant === 'gradient' ? "secondary" : "default"}
                className="px-8"
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="outline"
                size="lg"
                onClick={secondaryAction.onClick}
                className="px-8"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};