import { InputProps } from '@/types';
import { cn } from '@/lib/utils';

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  required = false,
  className = '',
  error,
}: InputProps) {
  const baseStyles = 'w-full px-4 py-3 border rounded-lg outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  const normalStyles = 'border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue focus:ring-opacity-20';
  const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-opacity-20';

  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        className={cn(
          baseStyles,
          error ? errorStyles : normalStyles,
          className
        )}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}