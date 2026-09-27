import type { Metadata } from "next";
import Link from "next/link";
import { nap, directionsUrl, googleReviewsUrl, agent, brokerage } from "@/lib/site";
import { homeFaqs } from "@/lib/faqs";
import { AmenityMapSection } from "@/components/AmenityMapSection";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <WebPageJsonLd
        name="Peccole Ranch Homes for Sale"
        description={`Peccole Ranch Homes for sale in Summerlin, Las Vegas. ${agent.name}, ${brokerage.name}, at 9501 Red Hills Rd, Las Vegas, NV 89117—buy or sell with confidence.`}
        path="/"
      />
      <FaqJsonLd faqs={[...homeFaqs]} />
      <section className="text-center" aria-label="Peccole Ranch Homes for Sale">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Peccole Ranch Homes for Sale
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300" data-aeo-answer>
          Peccole Ranch Homes are for sale in Summerlin, Las Vegas. {agent.name} with {brokerage.name} is your local expert at {nap.street}, {nap.city}, {nap.state} {nap.zip}—find listings, buy, or sell with confidence.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${nap.phoneTel}`}
            className="inline-flex rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Call
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Directions
          </a>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            View Google Reviews
          </a>
        </div>
      </section>

      <section className="mt-16 prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Peccole Ranch?
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Peccole Ranch is a master-planned community in Summerlin, one of Las Vegas’s most sought-after areas.
          Tree-lined streets, parks, CCSD schools, and easy access to Red Rock Canyon and the 215 make it a strong fit
          for buyers who want space and valley convenience.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Whether you’re looking for a first home, an upgrade, or an investment property among Peccole Ranch homes,
          we focus on this neighborhood so we can give you hyperlocal market insight and a smooth experience.
        </p>
      </section>

      <section className="mt-16" aria-labelledby="home-faq-heading">
        <h2
          id="home-faq-heading"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Peccole Ranch questions
        </h2>
        <dl className="mt-6 space-y-6">
          {homeFaqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-lg font-medium text-gray-900 dark:text-white">
                {faq.question}
              </dt>
              <dd className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6">
          <Link
            href="/faq"
            className="font-medium text-gray-900 underline underline-offset-4 dark:text-white"
          >
            More Peccole Ranch FAQs
          </Link>
        </p>
      </section>

      <AmenityMapSection />

      <section className="mt-12 flex flex-wrap gap-6">
        <Link
          href="/peccole-ranch"
          className="font-medium text-gray-900 underline underline-offset-4 dark:text-white"
        >
          Peccole Ranch Homes for Sale
        </Link>
        <Link
          href="/contact"
          className="font-medium text-gray-900 underline underline-offset-4 dark:text-white"
        >
          Contact us
        </Link>
        <Link
          href="/about"
          className="font-medium text-gray-900 underline underline-offset-4 dark:text-white"
        >
          About us
        </Link>
      </section>
    </div>
  );
}
