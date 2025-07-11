import { ReactNode, forwardRef } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  backgroundColor?: 'beige' | 'white' | 'gray' | 'secondary' | 'primary';
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
}

const backgroundColors = {
  beige: 'bg-beige',
  white: 'bg-white',
  gray: 'bg-gray-50',
  secondary: 'bg-secondary',
  primary: 'bg-primary/10',
};

const paddingY = {
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-24',
};

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(({
  children,
  className = '',
  id,
  backgroundColor = 'beige',
  paddingY: py = 'lg',
}, ref) => {
  const bgClass = backgroundColors[backgroundColor];
  const pyClass = paddingY[py];

  return (
    <section
      ref={ref}
      id={id}
      className={`${bgClass} ${pyClass} relative overflow-hidden @container ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper; 