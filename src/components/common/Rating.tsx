
import React from "react";
import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  size?: number;
  color?: string;
}

const Rating: React.FC<RatingProps> = ({ 
  value, 
  size = 16, 
  color = "#f59e0b" // Amber-500 from Tailwind 
}) => {
  // Round to nearest half
  const roundedValue = Math.round(value * 2) / 2;
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        
        // Full star
        if (starValue <= roundedValue) {
          return <Star key={index} size={size} fill={color} color={color} />;
        }
        // Half star
        else if (starValue - 0.5 === roundedValue) {
          return (
            <div key={index} className="relative">
              <Star size={size} color={color} className="opacity-30" />
              <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                <Star size={size} fill={color} color={color} />
              </div>
            </div>
          );
        }
        // Empty star
        else {
          return <Star key={index} size={size} color={color} className="opacity-30" />;
        }
      })}
      <span className="ml-1 text-sm text-gray-600">({value.toFixed(1)})</span>
    </div>
  );
};

export default Rating;
