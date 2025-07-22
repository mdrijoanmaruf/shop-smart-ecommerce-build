import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  className?: string;
  image: string;
  title: string;
  description?: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  rating?: number;
  onAddToCart?: () => void;
  onViewDetails?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  className,
  image,
  title,
  description,
  price,
  originalPrice,
  badge,
  rating,
  onAddToCart,
  onViewDetails
}) => {
  return (
    <Card className={cn("group overflow-hidden transition-all hover:shadow-lg", className)}>
      <CardHeader className="p-0 relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        {badge && (
          <Badge className="absolute top-2 left-2">
            {badge}
          </Badge>
        )}
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        )}
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-foreground">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        
        {rating && (
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < rating ? "text-yellow-400 fill-current" : "text-muted-foreground"
                )}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-muted-foreground ml-2">({rating})</span>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        {onAddToCart && (
          <Button onClick={onAddToCart} className="flex-1">
            Add to Cart
          </Button>
        )}
        {onViewDetails && (
          <Button variant="outline" onClick={onViewDetails} className="flex-1">
            View Details
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};