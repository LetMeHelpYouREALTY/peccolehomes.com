import type { Metadata } from "next";
import Link from "next/link";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { agent, brokerage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Peccole Ranch Homes | Las Vegas Master-Planned Community",
  description:
    "Peccole Ranch Homes in Summerlin, Las Vegas: parks, schools, Red Rock access, and family-friendly living. Your guide from Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
  alternates: {
    canonical: "/peccole-ranch",
  },
};

export default function PeccoleRanchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <WebPageJsonLd
        name="Peccole Ranch Homes | Las Vegas Master-Planned Community"
        description={`Peccole Ranch is a master-planned community in Summerlin, Las Vegas, Nevada, with parks, top schools, and access to Red Rock Canyon and the 215. Guide from ${agent.name}, ${brokerage.name}.`}
        path="/peccole-ranch"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Peccole Ranch" },
        ]}
      />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Peccole Ranch Homes & Community
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300" data-aeo-answer>
        Peccole Ranch is a master-planned community in Summerlin, Las Vegas, Nevada, known for tree-lined streets, top schools, and family-friendly living, with easy access to Red Rock Canyon and the 215.
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Looking for Peccole Ranch homes? Search listings above or contact us for current availability and market insight.
      </p>

      <section className="mt-10 prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Location & lifestyle
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Peccole Ranch sits in Summerlin, one of the most desirable areas in the Las Vegas valley. 
          Residents enjoy parks, trails, community pools, and a strong sense of neighborhood. 
          The area is known for good schools and a family-friendly feel while still being a short drive from the Strip and downtown.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-white">
          Why buyers choose Peccole Ranch
        </h2>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Strong schools and family-oriented amenities</li>
          <li>Parks, walking paths, and outdoor recreation</li>
          <li>Convenient access to the 215 and Red Rock Canyon</li>
          <li>Variety of single-family homes and floor plans</li>
          <li>Established HOA communities with maintained common areas</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-white">
          Peccole Ranch Homes for Sale
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Whether you’re looking for your first home, an upgrade, or an investment in Peccole Ranch, 
          we can help you find the right fit and guide you through the market. 
          <Link href="/contact" className="font-medium underline underline-offset-4">
            Contact us
          </Link>{" "}
          for current listings and local market insight.
        </p>
      </section>

      <p className="mt-10">
        <Link href="/" className="font-medium text-gray-900 underline underline-offset-4 dark:text-white">
          Back to home
        </Link>
      </p>
    </div>
  );
}
