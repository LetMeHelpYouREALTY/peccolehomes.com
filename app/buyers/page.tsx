import type { Metadata } from "next";
import Link from "next/link";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { agent, brokerage, site } from "@/lib/site";
import { buyerConsultationUrl } from "@/lib/calendly";

const buyerFaqs = [
  {
    question: "Who helps buyers in Peccole Ranch?",
    answer: `${agent.name} with ${brokerage.name} represents buyers searching in Peccole Ranch and nearby west Las Vegas neighborhoods.`,
  },
  {
    question: "How do I schedule a Peccole Ranch buyer consultation?",
    answer: `Book a 30-minute buyer consultation with ${agent.name} online to discuss your price range, preferred villages, and showing plan.`,
  },
  {
    question: "Can I search Peccole Ranch listings before we meet?",
    answer:
      "Yes. Use the property search on the homepage to browse active listings, then bring your saved favorites to the consultation for a tailored tour strategy.",
  },
] as const;

export const metadata: Metadata = {
  title: "Buy in Peccole Ranch",
  description:
    "Buy a Peccole Ranch home with Dr. Jan Duffy, Berkshire Hathaway HomeServices. Book a buyer consultation and search west Las Vegas listings.",
  alternates: {
    canonical: "/buyers",
  },
};

export default function BuyersPage() {
  const consultHeroUrl = buyerConsultationUrl("buyer-hero");
  const consultFooterUrl = buyerConsultationUrl("buyer-footer");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <WebPageJsonLd
        name="Buy a Home in Peccole Ranch"
        description={`Buy in Peccole Ranch with ${agent.name}, ${brokerage.name}. Buyer consultation, MLS search support, and offer strategy in west Las Vegas.`}
        path="/buyers"
      />
      <ServiceJsonLd
        path="/buyers"
        serviceType="Buyer representation"
        name="Peccole Ranch buyer representation"
        description={`Buyer representation for Peccole Ranch and west Las Vegas with ${agent.name}.`}
        bookingUrl={consultHeroUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Buy in Peccole Ranch" },
        ]}
      />
      <FaqJsonLd faqs={[...buyerFaqs]} />

      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Buy a home in Peccole Ranch
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300" data-aeo-answer>
        {agent.name} with {brokerage.name} helps buyers compare Peccole Ranch villages,
        HOA rules, and commute options across western Las Vegas—then build a showing and offer
        plan around your timeline.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={consultHeroUrl}
          className="inline-flex rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Book a buyer consultation
        </a>
        <Link
          href="/"
          className="inline-flex rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Search Peccole Ranch listings
        </Link>
      </div>

      <section className="mt-12 prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          What we cover in your consultation
        </h2>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Target villages, floor plans, and HOA fee ranges</li>
          <li>Comparable sales and current days-on-market context</li>
          <li>Showing schedule, offer deadlines, and inspection contingencies</li>
          <li>Coordination with lenders, title, and closing timelines</li>
        </ul>
        <p className="mt-6 text-gray-600 dark:text-gray-300">
          Selling instead?{" "}
          <Link href="/sellers" className="font-medium underline underline-offset-4">
            Plan your Peccole Ranch listing
          </Link>
          .
        </p>
        <p className="mt-6">
          <a
            href={consultFooterUrl}
            className="inline-flex rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Schedule with {agent.name}
          </a>
        </p>
      </section>

      <section className="mt-14" aria-labelledby="buyer-faq-heading">
        <h2
          id="buyer-faq-heading"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Buyer questions
        </h2>
        <dl className="mt-6 space-y-6">
          {buyerFaqs.map((faq) => (
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
