import type { Metadata } from "next";
import Link from "next/link";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { agent, brokerage, site } from "@/lib/site";
import { listingConsultationUrl } from "@/lib/calendly";

const sellerFaqs = [
  {
    question: "Who represents sellers in Peccole Ranch?",
    answer: `${agent.name} with ${brokerage.name} helps homeowners list and sell in Peccole Ranch and nearby west Las Vegas communities.`,
  },
  {
    question: "How do I request a Peccole Ranch listing consultation?",
    answer: `Book a listing consultation with ${agent.name} online. The scheduling page walks through your timeline, property details, and next steps for bringing your home to market.`,
  },
  {
    question: "Can I get help understanding my home’s value in Peccole Ranch?",
    answer: `${agent.name} reviews comparable sales, current competition, and your property’s features during a listing consultation to outline a pricing and marketing approach—without relying on automated estimates alone.`,
  },
] as const;

export const metadata: Metadata = {
  title: "Sell in Peccole Ranch",
  description:
    "List your Peccole Ranch home with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Book a listing consultation or home valuation review online.",
  alternates: {
    canonical: "/sellers",
  },
};

export default function SellersPage() {
  const listingHeroUrl = listingConsultationUrl("seller-hero");
  const valuationUrl = listingConsultationUrl("home-valuation-cta");
  const listingFooterUrl = listingConsultationUrl("seller-footer");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <WebPageJsonLd
        name="Sell Your Peccole Ranch Home"
        description={`Sell your Peccole Ranch home with ${agent.name}, ${brokerage.name}. Book a listing consultation for pricing, prep, and marketing in west Las Vegas.`}
        path="/sellers"
      />
      <ServiceJsonLd
        path="/sellers"
        serviceType="Seller representation"
        name="Peccole Ranch seller representation"
        description={`Listing consultation, pricing, and marketing for Peccole Ranch homes with ${agent.name}.`}
        bookingUrl={listingHeroUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Sell in Peccole Ranch" },
        ]}
      />
      <FaqJsonLd faqs={[...sellerFaqs]} />

      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Sell your Peccole Ranch home
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300" data-aeo-answer>
        {agent.name} with {brokerage.name} helps homeowners in Peccole Ranch—a master-planned
        community in western Las Vegas near Summerlin, Queensridge, Canyon Gate, and The Lakes—plan
        a focused listing strategy, pricing review, and marketing rollout.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={listingHeroUrl}
          className="inline-flex rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Book a listing consultation
        </a>
        <a
          href={valuationUrl}
          className="inline-flex rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Request a home valuation review
        </a>
      </div>

      <section className="mt-12 prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why sellers choose local representation
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Peccole Ranch was envisioned by Las Vegas developer William P. &ldquo;Bill&rdquo; Peccole
          as a master-planned mix of houses, condominiums, and apartments with shared amenities such
          as greenbelt walking trails, a disc golf course, and a clubhouse with tennis courts and
          playgrounds.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          That combination of housing types and on-site recreation means buyers compare your home
          against both nearby resales and new inventory across west Las Vegas. {agent.name} tracks
          those comps, HOA requirements, and showing logistics so your launch stays on schedule.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white">
          What happens at your consultation
        </h2>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Walkthrough of your goals, timeline, and any lease-back or relocation needs</li>
          <li>Pricing conversation grounded in current Peccole Ranch competition—not generic online estimates</li>
          <li>Prep checklist for photos, disclosures, and staging priorities</li>
          <li>Marketing plan covering MLS syndication, digital reach, and open-house strategy</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white">
          Ready to list?
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Choose a time that fits your calendar. Consultations are hosted on Calendly and confirmed
          by email. Prefer to browse active inventory first?{" "}
          <Link href="/peccole-ranch" className="font-medium underline underline-offset-4">
            Explore Peccole Ranch homes
          </Link>{" "}
          or return to the{" "}
          <Link href="/" className="font-medium underline underline-offset-4">
            homepage search
          </Link>
          .
        </p>
        <p className="mt-6">
          <a
            href={listingFooterUrl}
            className="inline-flex rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Schedule with {agent.name}
          </a>
        </p>
      </section>

      <section className="mt-14" aria-labelledby="seller-faq-heading">
        <h2
          id="seller-faq-heading"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Seller questions
        </h2>
        <dl className="mt-6 space-y-6">
          {sellerFaqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-lg font-medium text-gray-900 dark:text-white">
                {faq.question}
              </dt>
              <dd className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        {site.name} · {agent.name}, {brokerage.name}
      </p>
    </div>
  );
}
