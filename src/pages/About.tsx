import { Phone, Droplets, Wrench, Camera, GitBranch, Users, ClipboardList, Globe } from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import CallButton from '@/components/CallButton';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData, { buildLocalBusinessSchema } from '@/components/StructuredData';

const aboutImage = 'https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const toolsImage = 'https://images.pexels.com/photos/5414384/pexels-photo-5414384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function About() {
  useSeo({
    title: 'About Boise Drain Service | Drain Cleaning in Boise, Idaho',
    description:
      'Learn about Boise Drain Service, a drain-service business serving Boise, Idaho and the Treasure Valley. Contact us at 208-860-1639 to discuss your drain cleaning needs.',
    canonicalPath: '/about',
    ogImage: aboutImage,
  });

  const specialties = services.map((s) => s.name);

  return (
    <>
      <StructuredData data={buildLocalBusinessSchema()} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-slate-900">
        <div className="absolute inset-0">
          <img src={aboutImage} alt="Plumber installing pipe with specialized tools" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About Boise Drain Service
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Boise Drain Service is a drain-service business based in Boise, Idaho, dedicated to helping homeowners and businesses with their drain and sewer line needs throughout the Treasure Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Business Introduction */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Boise Drain Service is a plumbing and drain-service business serving Boise, Idaho, and the surrounding Treasure Valley communities. Our focus is on drain cleaning, clogged drain repair, and sewer line services for residential and commercial properties.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe in straightforward communication. When you call, you can describe your drain problem directly, and we will discuss the situation and which services may be appropriate for your property. We do not make promises we cannot keep — instead, we focus on understanding your needs and providing professional drain services.
              </p>
              <CallButton variant="primary" size="md" label="Call 208-860-1639" />
            </div>
            <div>
              <img src={toolsImage} alt="Professional plumbing tools" className="rounded-xl shadow-lg w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Our Drain Service Specialties
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a focused range of drain services to address common and complex drainage problems.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((name) => (
              <div key={name} className="bg-white rounded-lg p-4 border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-slate-900">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Approach */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Customer Communication First
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Call First</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                When you call, you can speak directly about your drain problem. We listen carefully to understand what you are experiencing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Discuss Options</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Based on the symptoms you describe, we discuss which drain services may be appropriate and what to expect.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Professional Service</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We use professional-grade equipment and proven techniques to address your drain problem effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-slate-600 mb-8">
            Call Boise Drain Service to discuss your drain problem or schedule service.
          </p>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={businessInfo.phoneLink} className="flex items-center gap-2 text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors">
                <Phone className="w-5 h-5" />
                {businessInfo.phone}
              </a>
              <a href={businessInfo.website} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors" rel="noopener noreferrer">
                <Globe className="w-5 h-5" />
                boisedrainservice.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Discuss Your Drain Problem?"
        subtext="Call Boise Drain Service today. We are here to help with your drain cleaning and repair needs."
        bgClass="bg-gradient-to-r from-blue-700 to-blue-900"
      />
    </>
  );
}
