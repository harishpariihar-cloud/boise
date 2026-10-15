import { useEffect } from 'react';
import { businessInfo } from '@/data/business';

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const scriptId = 'structured-data-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      // Keep the script for SPA navigation; it gets replaced on next mount
    };
  }, [data]);

  return null;
}

export function buildLocalBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: businessInfo.name,
    telephone: businessInfo.phone,
    url: businessInfo.website,
    areaServed: [
      { '@type': 'City', name: 'Boise, ID' },
      { '@type': 'City', name: 'Meridian, ID' },
      { '@type': 'City', name: 'Eagle, ID' },
      { '@type': 'City', name: 'Garden City, ID' },
      { '@type': 'City', name: 'Nampa, ID' },
      { '@type': 'City', name: 'Caldwell, ID' },
      { '@type': 'City', name: 'Kuna, ID' },
      { '@type': 'City', name: 'Star, ID' },
      { '@type': 'City', name: 'Middleton, ID' },
      { '@type': 'City', name: 'Hidden Springs, ID' },
    ],
    hasMap: businessInfo.googleMapsLink,
  };
}

export function buildServiceSchema(
  serviceName: string,
  locationName: string,
  description: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceName} in ${locationName}, ID`,
    description,
    provider: {
      '@type': 'Plumber',
      name: businessInfo.name,
      telephone: businessInfo.phone,
      url: businessInfo.website,
    },
    areaServed: {
      '@type': 'City',
      name: `${locationName}, ID`,
    },
  };
}

export function buildFAQSchema(
  faqs: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { label: string; path?: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.path ? { item: `https://${businessInfo.domain}${item.path}` } : {}),
    })),
  };
}
