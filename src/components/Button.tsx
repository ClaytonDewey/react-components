import { ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default: 'btn',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
    },
    size: {
      default: 'h-10 py-2 px-4',
      sm: 'h-9 px-2 rounded-md',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };

// npm i clsx
