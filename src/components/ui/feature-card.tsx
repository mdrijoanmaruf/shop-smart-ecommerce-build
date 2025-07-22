import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  className?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'centered';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  className,
  icon,
  title,
  description,
  variant = 'default'
}) => {
  return (
    <Card className={cn("transition-all hover:shadow-lg", className)}>
      <CardHeader className={cn(variant === 'centered' && "text-center")}>
        {icon && (
          <div className={cn(
            "w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4",
            variant === 'centered' && "mx-auto"
          )}>
            {icon}
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className={cn(variant === 'centered' && "text-center")}>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};