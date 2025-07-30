import React from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

interface TypographyBlockquoteProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const TypographyBlockquote: React.FC<TypographyBlockquoteProps> = ({
  children,
  className = '',
  ...props
}) => {
  const baseClass = 'mt-6 border-l-2 pl-6 italic';
  return (
    <blockquote className={`${baseClass} ${className}`} {...props}>
      {children}
    </blockquote>
  );
};

export default TypographyBlockquote;
