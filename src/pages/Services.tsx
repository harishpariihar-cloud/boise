import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { buildServiceLocationUrl } from '@/utils/seo';
import ServiceCard from '@/components/ServiceCard';
import CallButton from '@/components/CallButton';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData, { buildLocalBusinessSchema } from '@/components/StructuredData';

const heroImage = 'https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Services() {
  const primaryLocation = locations.find((l) => l.slug === businessInfo.primaryLocationSlug)!;

  useSeo({
    title: 'Drain Services in Boise, ID | Boise Drain Service',
    description:
      'Explore the full range of drain services offered by Boise Drain Service, including drain cleaning, clogged drain repair, sewer line services, camera inspection, hydro jetting, and more in Boise, Idaho.',
    canonicalPath: '/services',
    ogImage: heroImage,
  });

  return (
    <>
      <StructuredData data={buildLocalBusinessSchema()} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-slate-900">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional plumbing tools and drain equipment" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Drain Services
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Boise Drain Service offers a comprehensive range of drain cleaning and repair services for homes and businesses in Boise, Idaho, and the surrounding Treasure Valley. Explore our services below and call us to discuss which is right for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} locationSlug={primaryLocation.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Service descriptions */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Service Details</h2>
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.slug} className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-slate-100 last:border-0">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full sm:w-48 h-32 object-cover rounded-lg flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{service.description}</p>
                  <Link
                    to={buildServiceLocationUrl(service.slug, primaryLocation.slug)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Learn about {service.name} in {primaryLocation.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Not Sure Which Service You Need?"
        subtext="Call Boise Drain Service to describe your drain problem, and we can help determine the appropriate service."
        bgClass="bg-slate-900"
      />
    </>
  );
}
