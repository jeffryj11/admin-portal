import React from 'react';
import clsx from 'clsx';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'pending' | 'approved' | 'rejected';
}

export function Badge({ status, className, children, ...props }: BadgeProps) {
  const colorMap = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  return (
    <div
      className={clsx(
        'inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full',
        colorMap[status ?? 'pending'],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
