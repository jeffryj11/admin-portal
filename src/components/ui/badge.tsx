import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('inline-block rounded-full px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-800', className)}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';
export { Badge };