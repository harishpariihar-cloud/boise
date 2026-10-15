import { Phone, Globe, MapPin, ExternalLink } from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData, { buildLocalBusinessSchema } from '@/components/StructuredData';

const heroImage = 'https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Contact() {
  useSeo({
    title: 'Contact Boise Drain Service | Call 208-860-1639 | Boise, Idaho',
    description:
      'Contact Boise Drain Service for drain cleaning and repair services in Boise, Idaho. Call 208-860-1639 to discuss your drain problem or visit our Google Maps listing.',
    canonicalPath: '/contact',
    ogImage: heroImage,
  });

  return (
    <>
      <StructuredData data={buildLocalBusinessSchema()} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-slate-900">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Plumbing tools and faucet on blueprint" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Boise Drain Service
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              The fastest way to reach us is by phone. Call 208-860-1639 to discuss your drain problem, and we can help determine the appropriate service for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone</h3>
                    <a
                      href={businessInfo.phoneLink}
                      className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Call to discuss your drain problem</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Website</h3>
                    <a
                      href={businessInfo.website}
                      className="text-base font-medium text-slate-900 hover:text-blue-600 transition-colors break-all"
                      rel="noopener noreferrer"
                    >
                      {businessInfo.website}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Location</h3>
                    <p className="text-base font-medium text-slate-900">Boise, Idaho</p>
                    <a
                      href={businessInfo.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1 mt-1"
                    >
                      View on Google Maps
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Business Name</h3>
                <p className="text-slate-600 mb-4">{businessInfo.name}</p>
                <CallButton variant="primary" size="md" label="Call 208-860-1639" />
              </div>

              <div className="mt-6 p-6 bg-slate-50 rounded-xl">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">Business Address & Hours</h3>
                <p className="text-sm text-slate-500">
                  Please call 208-860-1639 to verify our current business address and operating hours before visiting in person.
                </p>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Find Us</h2>
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
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
              <a
                href={businessInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
