import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { allFaqs } from "@/lib/faqs";
import { agent, brokerage } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Peccole Ranch Homes",
  description:
    "FAQ about Peccole Ranch Homes in Summerlin, Las Vegas: location, HOA, home types, and how to buy or sell with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <WebPageJsonLd
        name="FAQ — Peccole Ranch Homes"
        description={`Frequently asked questions about Peccole Ranch Homes and Las Vegas real estate with ${agent.name}, ${brokerage.name}: where is Peccole Ranch, HOA fees, schools, types of homes, and how to buy or sell.`}
        path="/faq"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ" },
        ]}
      />
      <FaqJsonLd faqs={[...allFaqs]} />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Frequently asked questions
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300" data-aeo-answer>
        Common questions about Peccole Ranch Homes and Las Vegas real estate with {agent.name}, {brokerage.name}, answered: location, HOA, schools, home types, and how to get started buying or selling.
      </p>

      <dl className="mt-10 space-y-8">
        {allFaqs.map((faq) => (
          <div key={faq.question}>
            <dt className="text-lg font-semibold text-gray-900 dark:text-white">
              {faq.question}
            </dt>
            <dd className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
