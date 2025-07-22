import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeroProps {
  className?: string;
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  backgroundImage?: string;
  overlay?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  className,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  overlay = false
}) => {
  return (
    <section 
      className={cn(
        "relative flex items-center justify-center min-h-[60vh] px-4",
        backgroundImage && "bg-cover bg-center bg-no-repeat",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {subtitle && (
          <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">
            {subtitle}
          </p>
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryAction && (
              <Button
                size="lg"
                onClick={primaryAction.onClick}
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