import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center flex-wrap gap-1 text-slate-500">
        <li className="flex items-center gap-1">
          <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {item.path && !isLast ? (
                <Link to={item.path} className="hover:text-blue-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-slate-900 font-medium' : ''}>{item.label}</span>
              )}
              {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
