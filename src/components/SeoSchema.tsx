import React, { useEffect } from 'react';

interface SeoSchemaProps {
  view?: string;
  currentView?: string;
  title?: string;
  description?: string;
  data?: any;
}

export const SeoSchema: React.FC<SeoSchemaProps> = ({ view, currentView, title, description, data }) => {
  const activeView = view || currentView || 'home';

  useEffect(() => {
    // Generate JSON-LD Schema based on current view
    const safeViewName = activeView ? (activeView.charAt(0).toUpperCase() + activeView.slice(1).replace('-', ' ')) : 'Home';

    const hospitalSchema = {
      "@context": "https://schema.org",
      "@type": ["Hospital", "MedicalClinic"],
      "name": "Lahari IVF Hospital & Advanced IVF",
      "alternateName": "Lahari IVF Hospital",
      "url": typeof window !== 'undefined' ? window.location.origin : 'https://auraivf.org',
      "logo": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80",
      "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
      "description": "India's premier fertility & advanced IVF hospital network featuring AI Day-5 blastocyst culture, Micro-TESE andrology, PGT-A genetic screening, and 88.6% verified success rate.",
      "telephone": "+91-1800-450-2872",
      "emergencyTelephone": "+91-1800-450-2872",
      "priceRange": "₹₹ - ₹₹₹",
      "medicalSpecialty": [
        "ReproductiveEndocrinology",
        "Gynecology",
        "Urology",
        "MedicalGenetics"
      ],
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "In Vitro Fertilization (IVF)",
          "procedureType": "SurgicalProcedure"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Intracytoplasmic Sperm Injection (ICSI / PICSI)",
          "procedureType": "SurgicalProcedure"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Social & Medical Egg Freezing (Cryopreservation)",
          "procedureType": "NoninvasiveProcedure"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Micro-Dissection TESE (Micro-TESE)",
          "procedureType": "SurgicalProcedure"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 14, Institutional Area, Sector 44",
        "addressLocality": "Gurugram & South Delhi",
        "addressRegion": "Delhi NCR",
        "postalCode": "122003",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.4595",
        "longitude": "77.0266"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.96",
        "reviewCount": "8940",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Breadcrumb Schema
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://auraivf.org';
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": safeViewName,
          "item": `${origin}/#${activeView}`
        }
      ]
    };

    let specificSchema: any = null;

    if (activeView === 'doctors' && data) {
      specificSchema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": data.name || "Dr. Ananya Sen-Sharma",
        "jobTitle": data.title || "Senior Reproductive Endocrinologist",
        "medicalSpecialty": "ReproductiveEndocrinology",
        "worksFor": {
          "@type": "Hospital",
          "name": "Lahari IVF Hospital"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.98",
          "reviewCount": "2480"
        }
      };
    }

    // Insert or update script tag
    const scriptId = 'aura-seo-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const allSchemas = [hospitalSchema, breadcrumbSchema];
    if (specificSchema) allSchemas.push(specificSchema);
    scriptTag.text = JSON.stringify(allSchemas);

    // Update document title for SEO
    const baseTitle = "Lahari IVF Hospital | World-Class IVF & Reproductive Medicine";
    if (title) {
      document.title = `${title} | ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      description ||
        "India's leading IVF hospital with 88.6% verified success rate. AI time-lapse blastocyst culture, Micro-TESE andrology, 0% EMI financing, and senior reproductive faculty across Delhi, Mumbai, Bengaluru, Hyderabad, and Chennai."
    );
  }, [activeView, title, description, data]);

  return null;
};
