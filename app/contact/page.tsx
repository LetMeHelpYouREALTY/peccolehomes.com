import type { Metadata } from "next";
import Link from "next/link";
import { nap, fullAddress, directionsUrl, agent, brokerage } from "@/lib/site";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${agent.name}, ${brokerage.name}, for Peccole Ranch Homes. Visit ${nap.street}, ${nap.city}, or call.`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <WebPageJsonLd
        name="Contact Peccole Homes"
        description={`Contact ${agent.name}, ${brokerage.name}, for Peccole Ranch Homes: call ${nap.phone}, visit ${fullAddress}, or get directions online.`}
        path="/contact"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact" },
        ]}
      />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Contact us
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300" data-aeo-answer>
        To contact {agent.name} with {brokerage.name} for Peccole Ranch Homes: call {nap.phone}, visit {fullAddress}, or use the directions link below.
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Get in touch for Peccole Ranch Homes for sale, listings, or a free consultation.
      </p>

      <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {nap.businessName}
        </h2>
        <address className="mt-2 not-italic text-gray-600 dark:text-gray-300">
          {fullAddress}
        </address>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`tel:${nap.phoneTel}`}
            className="inline-flex rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Call {nap.phone}
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Get directions
          </a>
        </div>
      </div>

      <p className="mt-8 text-gray-600 dark:text-gray-300">
        Explore{" "}
        <Link href="/amenities" className="font-medium underline underline-offset-4">
          nearby amenities in Peccole Ranch
        </Link>{" "}
        — grocery, parks, healthcare, and schools on our interactive map.
      </p>

      <div className="mt-10 h-80 overflow-hidden rounded-lg">
        <iframe
          title="Office location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
