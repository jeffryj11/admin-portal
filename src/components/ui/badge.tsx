import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'approved' | 'pending' | 'rejected';
}

export function Badge({ className, variant = 'pending', ...props }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold';
  const variants = {
    approved: 'bg-green-600 text-white',
    pending: 'bg-yellow-500 text-black',
    rejected: 'bg-red-600 text-white'
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props} />
  );
}
