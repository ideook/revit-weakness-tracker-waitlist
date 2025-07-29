import { CardProps } from '@/types';
import { cn } from '@/lib/utils';

export default function Card({
  children,
  className = '',
  hover = true,
}: CardProps) {
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-md hover:-translate-y-1' : '';

  return (
    <div className={cn(baseStyles, hoverStyles, className)}>
      {children}
    </div>
  );
}