import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function Button({ children, href }) {
  const className = "inline-flex items-center gap-3 px-8 py-3.5 border border-dark-green text-dark-green hover:bg-dark-green hover:text-white transition-all duration-300 text-sm font-medium uppercase group";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        <ArrowLongRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <button className={className}>
      {children}
      <ArrowLongRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}