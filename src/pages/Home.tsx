import { Link } from 'react-router-dom';
import { Phone, Droplets, Wrench, Eye, Camera, CookingPot, ShowerHead, ArrowRight, AlertTriangle, ClipboardList, Users, GitBranch } from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { generalFaqs } from '@/data/business';
import { buildServiceLocationUrl } from '@/utils/seo';
import ServiceCard from '@/components/ServiceCard';
import CallButton from '@/components/CallButton';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData, { buildLocalBusinessSchema, buildFAQSchema } from '@/components/StructuredData';

const heroImage = 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const boiseImage = 'https://images.pexels.com/photos/30145897/pexels-photo-30145897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const commonProblems = [
  { icon: Droplets, title: 'Slow-Draining Sinks', text: 'Water taking longer than usual to drain from sinks, tubs, or showers can indicate a developing blockage in the drain line.' },
  { icon: Wrench, title: 'Clogged Bathroom Drains', text: 'Hair, soap scum, and personal care products commonly build up in bathroom drains, restricting water flow over time.' },
  { icon: CookingPot, title: 'Kitchen Drain Blockages', text: 'Grease, food particles, and cooking oils can accumulate in kitchen drain lines, causing persistent clogs and odors.' },
  { icon: AlertTriangle, title: 'Recurring Drain Problems', text: 'Clogs that keep coming back may signal a deeper issue such as pipe damage, root intrusion, or significant buildup.' },
  { icon: GitBranch, title: 'Main Drain or Sewer Concerns', text: 'Multiple fixtures backing up simultaneously can indicate a blockage in the main drain or sewer line.' },
  { icon: Eye, title: 'Unusual Drainage Odors', text: 'Foul smells from drains can result from decomposing debris, dry traps, or sewer line issues that may need professional attention.' },
];

const benefits = [
  { icon: Phone, title: 'Direct Communication', text: 'Call and speak directly about your drain problem. We listen to your concerns and discuss the situation before recommending any service.' },
  { icon: ClipboardList, title: 'Clear Assessment', text: 'We take the time to understand the nature of your drainage issue, asking the right questions to determine the most appropriate approach.' },
  { icon: Users, title: 'Customer-Focused Approach', text: 'Every situation is different. We discuss suitable options based on your specific needs rather than applying a one-size-fits-all solution.' },
  { icon: Wrench, title: 'Professional Service', text: 'We use professional-grade equipment and proven techniques to address drain and sewer line problems effectively.' },
];

export default function Home() {
  useSeo({
    title: 'Boise Drain Service | Drain Cleaning in Boise, Idaho | 208-860-1639',
    description:
      'Professional drain cleaning and repair services in Boise, Idaho. Contact Boise Drain Service at 208-860-1639 for drain cleaning, clogged drain repair, sewer line services, and more.',
    canonicalPath: '/',
    ogImage: heroImage,
  });

  const featuredServices = services.slice(0, 6);
  const homeFaqs = generalFaqs.slice(0, 5);
  const primaryLocation = locations.find((l) => l.slug === businessInfo.primaryLocationSlug)!;

  return (
    <>
      <StructuredData data={buildLocalBusinessSchema()} />
      <StructuredData data={buildFAQSchema(homeFaqs)} />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional plumber cleaning drain pipes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Drain Cleaning Services in Boise, Idaho
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed">
              Dealing with a clogged drain or a drainage problem? Contact Boise Drain Service to discuss the issue and find out which services are available for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallButton variant="primary" size="lg" label="Call 208-860-1639" />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-slate-900 transition-all"
              >
                Explore Drain Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Introduction */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">About Boise Drain Service</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Your Local Drain Service Specialists in Boise, Idaho
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Boise Drain Service is a plumbing and drain-service business based in Boise, Idaho, serving the surrounding Treasure Valley communities. We focus on drain cleaning, clogged drain repair, main drain cleaning, sewer line cleaning, sewer line repair, drain camera inspection, hydro jetting, and specialized cleaning for kitchen, bathroom, and floor drains.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                When you call, you will speak directly with our team to describe the drainage problem you are experiencing. We take the time to understand your situation and discuss which services may be appropriate for your property.
              </p>
              <CallButton variant="primary" size="md" label="Call 208-860-1639" />
            </div>
            <div className="relative">
              <img
                src={boiseImage}
                alt="Downtown Boise, Idaho with mountains in the background"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden sm:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm text-blue-100">Drain Services Offered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Featured Drain Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional drain services for homes and businesses throughout Boise and the Treasure Valley.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} locationSlug={primaryLocation.slug} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Drain Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Drain Problems */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Common Issues</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Common Drain Problems
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Recognizing the signs of drain problems early can help you decide when to seek professional assistance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{problem.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Contact */}
      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Why Contact Boise Drain Service?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We focus on clear communication, understanding your drain problem, and discussing suitable options.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              How the Service Process Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Call and Describe the Problem', text: 'Call 208-860-1639 and describe the drainage issue you are experiencing. The more details you can share, the better we can assess the situation.' },
              { step: '2', title: 'Discuss the Issue', text: 'We discuss the problem with you and talk through the appropriate next steps based on the symptoms and circumstances you describe.' },
              { step: '3', title: 'Arrange Service', text: 'Once the approach is agreed upon, we arrange service according to the company\'s confirmed process and current availability.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Serving Boise, Idaho and the surrounding Treasure Valley communities.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={buildServiceLocationUrl('drain-cleaning', loc.slug)}
                className="bg-white rounded-lg p-4 text-center border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {loc.name}, {loc.state}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={homeFaqs} />
          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All FAQs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Having a Drain Problem?"
        subtext="Contact Boise Drain Service to discuss your drain-cleaning needs."
        bgClass="bg-gradient-to-r from-blue-700 to-blue-900"
      />
    </>
  );
}
