import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Location } from '@/data/locations';
import { buildServiceLocationUrl } from '@/utils/seo';

interface LocationCardProps {
  location: Location;
  serviceSlug?: string;
}

export default function LocationCard({ location, serviceSlug = 'drain-cleaning' }: LocationCardProps) {
  return (
    <Link
      to={buildServiceLocationUrl(serviceSlug, location.slug)}
      className="group bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <MapPin className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {location.name}, {location.state}
          </h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">{location.shortDescription}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 mt-2 group-hover:text-blue-700 transition-colors">
            View Services
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
