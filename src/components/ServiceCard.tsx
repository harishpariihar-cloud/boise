import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '@/data/services';
import { businessInfo } from '@/data/business';
import { buildServiceLocationUrl } from '@/utils/seo';

interface ServiceCardProps {
  service: Service;
  locationSlug?: string;
}

export default function ServiceCard({ service, locationSlug }: ServiceCardProps) {
  const locSlug = locationSlug || businessInfo.primaryLocationSlug;
  const Icon = (Icons[service.icon as keyof typeof Icons] || Icons.Droplets) as Icons.LucideIcon;
  const link = buildServiceLocationUrl(service.slug, locSlug);

  return (
    <Link
      to={link}
      className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white">{service.name}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.shortDescription}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
          {service.name} in Boise, ID
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
