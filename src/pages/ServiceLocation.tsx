import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { useSeo, buildServiceLocationUrl } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services, Service } from '@/data/services';
import { locations, Location } from '@/data/locations';
import CallButton from '@/components/CallButton';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData, {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
} from '@/components/StructuredData';
import * as Icons from 'lucide-react';

export default function ServiceLocation() {
  const params = useParams();
  const fullPath = (params['*'] || '').replace(/^\//, '');

  // Match against known services and locations
  const matchedService = services.find((s) => fullPath.startsWith(s.slug + '-'));
  const matchedLocation = matchedService
    ? locations.find((l) => fullPath === `${matchedService.slug}-${l.slug}`)
    : undefined;

  if (!matchedService || !matchedLocation) {
    return <Navigate to="/404" replace />;
  }

  const service: Service = matchedService;
  const location: Location = matchedLocation;
  const canonicalPath = buildServiceLocationUrl(service.slug, location.slug);
  const Icon = (Icons[service.icon as keyof typeof Icons] || Icons.Droplets) as Icons.LucideIcon;

  const seoTitle = `${service.name} in ${location.name}, ${location.state} | Boise Drain Service`;
  const seoDescription = `${service.shortDescription} Serving ${location.name}, ${location.state}. Call Boise Drain Service at 208-860-1639 to discuss your drain problem.`;

  useSeo({
    title: seoTitle,
    description: seoDescription,
    canonicalPath,
    ogImage: service.image,
  });

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 6);

  const pageFaqs = [
    ...service.faqs,
    {
      question: `Does Boise Drain Service provide ${service.name.toLowerCase()} in ${location.name}, ${location.state}?`,
      answer: `Yes, Boise Drain Service provides ${service.name.toLowerCase()} services to ${location.name}, ${location.state}, and the surrounding Treasure Valley communities. Call ${businessInfo.phone} to discuss your specific situation and confirm service availability.`,
    },
  ];

  const breadcrumbItems = [
    { label: 'Services', path: '/services' },
    { label: service.name, path: buildServiceLocationUrl(service.slug, businessInfo.primaryLocationSlug) },
    { label: `${location.name}, ${location.state}` },
  ];

  return (
    <>
      <StructuredData data={buildServiceSchema(service.name, location.name, service.description)} />
      <StructuredData data={buildFAQSchema(pageFaqs)} />
      <StructuredData data={buildBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={buildLocalBusinessSchema()} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-slate-900">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.imageAlt} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">{service.name}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {service.name} in {location.name}, {location.state}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {service.shortDescription}
            </p>
            <CallButton variant="primary" size="lg" label="Call 208-860-1639" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.name} Services in {location.name}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {location.description}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {service.serviceDescription}
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={service.image}
                  alt={`${service.name} service in ${location.name}, ${location.state}`}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common {service.name.toLowerCase()} Problems in {location.name}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you are experiencing any of the following issues, {service.name.toLowerCase()} may be the appropriate service for your property in {location.name}, {location.state}.
                </p>
                <ul className="space-y-3">
                  {service.commonProblems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 leading-relaxed">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h2 className="text-xl font-bold text-slate-900 mb-3">Customer Guidance</h2>
                <p className="text-sm text-slate-700 leading-relaxed">{service.customerGuidance}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.name} FAQs in {location.name}
                </h2>
                <FAQAccordion faqs={pageFaqs} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 rounded-xl p-6 text-center sticky top-24">
                <h3 className="text-lg font-bold text-white mb-2">Need {service.name}?</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Call Boise Drain Service to discuss your drain problem in {location.name}.
                </p>
                <CallButton variant="primary" size="md" label="Call 208-860-1639" className="w-full" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                  Related Services
                </h3>
                <div className="space-y-2">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      to={buildServiceLocationUrl(rel.slug, location.slug)}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all group"
                    >
                      <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                        {rel.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                  {service.name} in Other Areas
                </h3>
                <div className="space-y-2">
                  {otherLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={buildServiceLocationUrl(service.slug, loc.slug)}
                      className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-slate-200 hover:border-blue-200 transition-all group"
                    >
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors">
                        {service.name} in {loc.name}, {loc.state}
                      </span>
                    </Link>
                  ))}
                  <Link
                    to="/service-areas"
                    className="block text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors pt-2"
                  >
                    View All Service Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Having a Drain Problem in ${location.name}?`}
        subtext={`Contact Boise Drain Service to discuss your ${service.name.toLowerCase()} needs in ${location.name}, ${location.state}.`}
        bgClass="bg-slate-900"
      />
    </>
  );
}
