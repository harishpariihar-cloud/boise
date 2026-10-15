import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { generalFaqs } from '@/data/business';
import FAQAccordion from '@/components/FAQAccordion';
import CallButton from '@/components/CallButton';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData, { buildFAQSchema } from '@/components/StructuredData';

const heroImage = 'https://images.pexels.com/photos/12105083/pexels-photo-12105083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function FAQ() {
  useSeo({
    title: 'FAQ | Boise Drain Service | Boise, Idaho Drain Cleaning',
    description:
      'Find answers to frequently asked questions about Boise Drain Service, including our drain services, service areas, and how to contact us for drain problems in Boise, Idaho.',
    canonicalPath: '/faq',
    ogImage: heroImage,
  });

  return (
    <>
      <StructuredData data={buildFAQSchema(generalFaqs)} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-slate-900">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Plumbing hand tools" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Find answers to common questions about Boise Drain Service and our drain cleaning and repair services. If you do not find your answer here, please call us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={generalFaqs} />

          <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
            <p className="text-slate-700 mb-4">
              Did not find the answer you were looking for?
            </p>
            <CallButton variant="primary" size="md" label="Call 208-860-1639" />
          </div>
        </div>
      </section>

      <CTASection
        headline="Still Have Questions?"
        subtext="Call Boise Drain Service to discuss your drain problem and get answers to your questions."
        bgClass="bg-slate-900"
      />
    </>
  );
}
