import { site } from "@/lib/site";
import { entityIds } from "@/lib/entity";
import { peccoleRanchAreaServed } from "@/lib/area-served";

type ServiceJsonLdProps = {
  path: string;
  serviceType: string;
  name: string;
  description: string;
  bookingUrl: string;
};

export function ServiceJsonLd({
  path,
  serviceType,
  name,
  description,
  bookingUrl,
}: ServiceJsonLdProps) {
  const url = `${site.baseUrl}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    description,
    url,
    provider: {
      "@id": entityIds.business,
    },
    areaServed: peccoleRanchAreaServed,
    offers: {
      "@type": "Offer",
      url: bookingUrl,
      availability: "https://schema.org/InStock",
    },
  };

  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
