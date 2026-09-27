import type { Metadata } from "next";
import { AmenityMap } from "@/components/AmenityMap";
import { AgentTrustBlock } from "@/components/AgentTrustBlock";
import { AmenitiesPageJsonLd, faqItems } from "@/components/AmenitiesPageJsonLd";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { community } from "@/lib/amenities";
import { agent, brokerage, site } from "@/lib/site";

const title = `Nearby Amenities in ${community.name}, Las Vegas`;
const description = `Grocery, parks, golf, healthcare, shopping, and schools near ${community.name} in Las Vegas. Interactive map and local guide from ${agent.name}, ${brokerage.name}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${site.baseUrl}/amenities`,
  },
  openGraph: {
    title,
    description,
    url: `${site.baseUrl}/amenities`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function AmenitiesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <AmenitiesPageJsonLd />
      <WebPageJsonLd name={title} description={description} path="/amenities" />

      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Nearby Amenities in {community.name}, Las Vegas
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300" data-aeo-answer>
        {community.name} in west Las Vegas offers grocery, parks, golf, hospitals, shopping at
        Downtown Summerlin, and CCSD schools — explore the interactive map and category guide below.
      </p>

      <div className="mt-8">
        <AmenityMap />
      </div>

      <article className="mt-14 prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Dining</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Day-to-day dining starts along Charleston Boulevard and Rampart Boulevard, with national
          chains and local favorites. For a wider restaurant mix, Downtown Summerlin at 1980 Festival
          Plaza Dr and Boca Park Fashion Village at 750 S Rampart Blvd add sit-down and quick-service
          options without a long drive.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white">
          Parks &amp; recreation
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Inside {community.name}, the community association clubhouse at 9501 Red Hills Rd anchors
          tennis courts, playgrounds, and resident events, with tree-lined trails and a disc golf
          course woven through the greenbelts. Exploration Peak Park at 9600 W Azure Dr adds open
          space and trail access at the edge of the neighborhood.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white">Golf</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Public courses within a short drive include Angel Park Golf Club at 1001 S Rampart Blvd and
          TPC Las Vegas at 1700 Village Center Cir in Summerlin. Canyon Gate Country Club also
          borders portions of the Peccole Ranch area for residents seeking a private club option.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white">Healthcare</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Summerlin Hospital Medical Center (657 N Town Center Dr) and Centennial Hills Hospital
          Medical Center (6900 N Durango Dr) are the primary full-service hospitals serving families
          in {community.name}. Urgent care and physician offices cluster along Charleston, Rampart,
          and Town Center Drive.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white">Shopping</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Smith&apos;s at 9851 W Charleston Blvd covers weekly grocery runs in the neighborhood.
          Downtown Summerlin brings department stores, specialty retail, Trader Joe&apos;s, and Whole
          Foods Market. Boca Park Fashion Village adds boutiques and services along Rampart.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white">Schools</h2>
        <p className="text-gray-600 dark:text-gray-300">
          {community.name} is served by Clark County School District. Palo Verde High School at 333 S
          Pavilion Center Dr is a well-known west-valley high school; elementary and middle assignments
          vary by address. Always confirm your exact zoning at{" "}
          <a href="https://www.ccsd.net/zoning" className="underline underline-offset-2">
            ccsd.net/zoning
          </a>{" "}
          before you write an offer.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white">
          Commute &amp; drive times
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          The Bruce Woodbury Beltway (215) connects {community.name} to the rest of the valley.
          Approximate drive times in typical traffic: Las Vegas Strip 15–20 minutes; Downtown
          Summerlin 10 minutes; Harry Reid International Airport 25–35 minutes; Red Rock Canyon
          National Conservation Area under 20 minutes. Times vary by route and time of day.
        </p>
      </article>

      <section className="mt-14" aria-labelledby="amenities-faq-heading">
        <h2 id="amenities-faq-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <dl className="mt-6 space-y-6">
          {faqItems.map((item) => (
            <div key={item.question}>
              <dt className="font-medium text-gray-900 dark:text-white">{item.question}</dt>
              <dd className="mt-2 text-gray-600 dark:text-gray-300">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <AgentTrustBlock />
    </div>
  );
}
