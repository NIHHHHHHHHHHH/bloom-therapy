// components/Button.jsx
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function Button({ 
  children, 
  href, 
  fullWidth = false,
  className: customClassName = ''
}) {
  const baseClassName = `inline-flex items-center justify-center gap-3 px-8 py-3.5 text-dark-green hover:bg-dark-green hover:text-white transition-all duration-300 text-sm font-medium uppercase group`;
  
  const borderClassName = fullWidth ? 'border-t border-dark-green' : 'border border-dark-green';
  
  const widthClassName = fullWidth ? 'w-full' : '';
  
  const combinedClassName = `${baseClassName} ${borderClassName} ${widthClassName} ${customClassName}`;

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