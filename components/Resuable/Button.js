
// components/Button.jsx
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function Button({ 
  children, 
  href, 
  fullWidth = false,
  variant = 'default',
  className: customClassName = ''
}) {
  const baseClassName = `inline-flex items-center justify-center gap-3 px-8 py-3.5 transition-all duration-300 text-sm font-medium uppercase group`;
  
  const variants = {
    default: 'text-foreground border-foreground hover:bg-foreground hover:text-primary',
    'outline-primary': 'text-primary border-primary hover:bg-primary hover:text-foreground'
  };
  
  const borderClassName = fullWidth ? 'border-t' : 'border';
  const widthClassName = fullWidth ? 'w-full' : '';
  const variantClassName = variants[variant] || variants.default;
  
  const combinedClassName = `${baseClassName} ${borderClassName} ${variantClassName} ${widthClassName} ${customClassName}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
        <ArrowLongRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <button className={combinedClassName}>
      {children}
      <ArrowLongRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}