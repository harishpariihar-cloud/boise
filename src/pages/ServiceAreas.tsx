import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { buildServiceLocationUrl } from '@/utils/seo';
import LocationCard from '@/components/LocationCard';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import StructuredData, { buildLocalBusinessSchema } from '@/components/StructuredData';

const heroImage = 'https://images.pexels.com/photos/917037/pexels-photo-917037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function ServiceAreas() {
  useSeo({
    title: 'Service Areas | Boise Drain Service | Boise, Idaho & Treasure Valley',
    description:
      'Boise Drain Service provides drain cleaning and repair services throughout the Treasure Valley, including Boise, Meridian, Eagle, Garden City, Nampa, Caldwell, Kuna, Star, Middleton, and Hidden Springs, Idaho.',
    canonicalPath: '/service-areas',
    ogImage: heroImage,
  });

  return (
    <>
      <StructuredData data={buildLocalBusinessSchema()} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-slate-900">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Boise Foothills under blue sky" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Service Areas' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Service Areas
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Boise Drain Service provides drain cleaning and repair services to Boise, Idaho, and the surrounding Treasure Valley communities. Explore the areas we serve below and find service-location pages for your community.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Grid */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* Location descriptions with service links */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Drain Services by Location
          </h2>
          <div className="space-y-8">
            {locations.map((location) => (
              <div key={location.slug} className="pb-8 border-b border-slate-100 last:border-0">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">{location.name}, {location.state}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{location.description}</p>
                <div className="flex flex-wrap gap-2">
                  {services.slice(0, 5).map((service) => (
                    <Link
                      key={service.slug}
                      to={buildServiceLocationUrl(service.slug, location.slug)}
                      className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {service.name} in {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Find Us on the Map</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={businessInfo.googleMapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Boise Drain Service Location Map"
              className="w-full"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href={businessInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Open in Google Maps
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <CTASection
        headline="Need Drain Service in Your Area?"
        subtext="Contact Boise Drain Service to confirm service availability and discuss your drain problem."
        bgClass="bg-slate-900"
      />
    </>
  );
}
