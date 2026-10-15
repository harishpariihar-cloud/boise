import { Phone } from 'lucide-react';
import { businessInfo } from '@/data/business';

interface CallButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CallButton({
  label = `Call ${businessInfo.phone}`,
  variant = 'primary',
  size = 'md',
  className = '',
}: CallButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-white text-blue-700 hover:bg-blue-50 focus:ring-blue-500 border border-blue-200',
    white: 'bg-white text-slate-900 hover:bg-gray-100 focus:ring-white',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-slate-900 focus:ring-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <a
      href={businessInfo.phoneLink}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={`Call Boise Drain Service at ${businessInfo.phone}`}
    >
      <Phone className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      {label}
    </a>
  );
}
