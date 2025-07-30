import React, { type ElementType, type ReactNode, type HTMLAttributes, JSX } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  1: 'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
  2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  5: 'scroll-m-20 text-lg font-semibold tracking-tight',
  6: 'scroll-m-20 text-base font-semibold tracking-tight',
};

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = '',
  ...props
}) => {
  const Tag = (`h${level}` as keyof JSX.IntrinsicElements) as ElementType;

  return (
    <Tag className={`${levelStyles[level]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
