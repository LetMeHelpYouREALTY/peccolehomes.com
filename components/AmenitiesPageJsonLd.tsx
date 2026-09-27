import { curatedAmenities, community } from "@/lib/amenities";
import { agent, brokerage, geo, nap, site } from "@/lib/site";

const faqItems = [
  {
    question: `What grocery stores are near ${community.name}?`,
    answer: `Smith's Food and Drug at 9851 W Charleston Blvd sits in ${community.name}; Downtown Summerlin (Trader Joe's, Whole Foods, and more) is a short drive north on Rampart and Charleston.`,
  },
  {
    question: `How far is ${community.name} from the Las Vegas Strip?`,
    answer: `From ${community.name} to the central Las Vegas Strip is typically about 15–20 minutes by car in normal traffic (approximate; varies by time of day and exact destination).`,
  },
  {
    question: `Are there hospitals near ${community.name}?`,
    answer: `Yes — Summerlin Hospital Medical Center (657 N Town Center Dr) and Centennial Hills Hospital Medical Center (6900 N Durango Dr) serve the west Las Vegas valley near ${community.name}.`,
  },
  {
    question: `What parks and recreation are in ${community.name}?`,
    answer: `The Peccole Ranch clubhouse at 9501 Red Hills Rd offers tennis, playgrounds, and community amenities, with walking trails and a disc golf course; Exploration Peak Park is nearby on W Azure Dr.`,
  },
  {
    question: `What schools serve ${community.name}?`,
    answer: `Most homes are in Clark County School District (CCSD); assigned elementary, middle, and high schools depend on your street address — confirm at ccsd.net/zoning before you buy.`,
  },
  {
    question: `How far is ${community.name} from Harry Reid International Airport?`,
    answer: `Harry Reid International Airport is roughly 25–35 minutes from ${community.name} by car depending on route and traffic (approximate).`,
  },
  {
    question: `Where is the nearest major shopping near ${community.name}?`,
    answer: `Downtown Summerlin at 1980 Festival Plaza Dr and Boca Park Fashion Village at 750 S Rampart Blvd are the closest large retail and dining hubs.`,
  },
  {
    question: `Is ${community.name} in Summerlin?`,
    answer: `${community.name} borders Summerlin on the west side of the valley and shares many Summerlin conveniences while maintaining its own master-planned neighborhoods and HOA.`,
  },
];

export function AmenitiesPageJsonLd() {
  const pageUrl = `${site.baseUrl}/amenities`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nearby Amenities",
        item: pageUrl,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Nearby amenities in ${community.name}, ${community.city}`,
    itemListElement: curatedAmenities.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address.split(",")[0]?.trim(),
          addressLocality: community.city,
          addressRegion: community.state,
          addressCountry: "US",
        },
      },
    })),
  };

  const communityPlace = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: community.name,
    description: `Master-planned community in ${community.city}, Nevada`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.street,
      addressLocality: nap.city,
      addressRegion: nap.state,
      postalCode: nap.zip,
      addressCountry: "US",
    },
  };

  const agentEntity = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: agent.name,
    identifier: agent.license,
    worksFor: {
      "@type": "Organization",
      name: brokerage.name,
    },
    areaServed: {
      "@type": "Place",
      name: community.name,
      containedInPlace: {
        "@type": "City",
        name: community.city,
      },
    },
    url: site.baseUrl,
    telephone: nap.phone,
  };

  const payload = {
    "@context": "https://schema.org",
    "@graph": [breadcrumb, faqPage, itemList, communityPlace, agentEntity],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export { faqItems };
