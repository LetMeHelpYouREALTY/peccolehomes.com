import type { Metadata } from "next";
import { nap, site, agent, brokerage } from "@/lib/site";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${nap.businessName}: ${agent.name}, ${brokerage.name}. Peccole Ranch and west Las Vegas real estate with local market guidance.`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <WebPageJsonLd
        name={`About ${nap.businessName}`}
        description={`${nap.businessName} — ${agent.name}, ${agent.license}, with ${brokerage.name}. Peccole Ranch Homes and Summerlin, Las Vegas. Office: ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}.`}
        path="/about"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About" },
        ]}
      />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        About {nap.businessName}
      </h1>
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300" data-aeo-answer>
        {nap.businessName} is led by {agent.name} (Nevada license {agent.license}) with {brokerage.name}, focused on Peccole Ranch Homes and the greater Summerlin area in Las Vegas. Office: {nap.street}, {nap.city}, {nap.state} {nap.zip}.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        We focus on Peccole Ranch and nearby west Las Vegas communities so we can offer real local
        expertise—from market trends and HOA details to commute times and amenity access. Whether you
        are buying or selling in Peccole Ranch, we are here to help with a straightforward, professional
        experience.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Our office is at {nap.street}, {nap.city}, {nap.state} {nap.zip}. 
        Stop by, call, or reach out through our contact page.
      </p>
      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        {nap.businessName} — Peccole Ranch real estate. {site.baseUrl}
      </p>
    </div>
  );
}
