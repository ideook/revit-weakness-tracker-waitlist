import { ButtonProps } from '@/types';
import { cn } from '@/lib/utils';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  loading = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-blue text-white hover:shadow-lg hover:scale-105 focus:ring-primary-blue',
    secondary: 'bg-white text-primary-blue border border-primary-blue hover:bg-primary-blue hover:text-white focus:ring-primary-blue',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(baseStyles, variants[variant], className)}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
}