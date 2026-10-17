import type { Metadata } from "next";
import Link from "next/link";
import { AmenityMapSection } from "@/components/AmenityMapSection";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { agent, brokerage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Peccole Ranch Community Guide",
  description:
    "Peccole Ranch in west Las Vegas: parks, trails, clubhouse amenities, and Red Rock access. Community guide from Dr. Jan Duffy, Berkshire Hathaway HomeServices.",
  alternates: {
    canonical: "/peccole-ranch",
  },
};

export default function PeccoleRanchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <WebPageJsonLd
        name="Peccole Ranch Community Guide"
        description={`Peccole Ranch is a master-planned community in western Las Vegas, Nevada, with parks, trails, and access to Red Rock Canyon and the 215. Guide from ${agent.name}, ${brokerage.name}.`}
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
        Peccole Ranch is a master-planned community in western Las Vegas, Nevada, near Summerlin,
        with tree-lined streets, parks, trails, and clubhouse amenities, plus convenient access to
        Red Rock Canyon and the 215 Beltway.
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Looking for Peccole Ranch homes? Search listings above or contact us for current availability
        and market insight.
      </p>

      <section className="mt-10 prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Location & lifestyle
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Peccole Ranch sits in west Las Vegas, adjacent to Summerlin and other established west-side
          neighborhoods. Residents use community parks, trails, pools, and clubhouse facilities while
          staying a short drive from Downtown Summerlin, the Strip, and downtown Las Vegas.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-white">
          Why buyers choose Peccole Ranch
        </h2>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>CCSD school assignments — verify your address with the CCSD Zoning Search</li>
          <li>Parks, walking paths, and outdoor recreation</li>
          <li>Clubhouse, tennis, and on-site amenities (varies by sub-association)</li>
          <li>Convenient access to the 215 and Red Rock Canyon</li>
          <li>Variety of single-family homes, townhomes, and condominiums</li>
          <li>HOA-maintained common areas across multiple villages</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-white">
          Peccole Ranch Homes for Sale
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Whether you are purchasing your first home, moving up, or investing in Peccole Ranch, we can
          help you compare floor plans and pricing.{" "}
          <Link href="/contact" className="font-medium underline underline-offset-4">
            Contact us
          </Link>{" "}
          for current listings, explore{" "}
          <Link href="/amenities" className="font-medium underline underline-offset-4">
            nearby amenities
          </Link>
          , or{" "}
          <Link href="/sellers" className="font-medium underline underline-offset-4">
            plan your sale
          </Link>{" "}
          with a listing consultation.
        </p>
      </section>

      <AmenityMapSection variant="compact" />

      <p className="mt-10">
        <Link href="/" className="font-medium text-gray-900 underline underline-offset-4 dark:text-white">
          Back to home
        </Link>
      </p>
    </div>
  );
}
