import Link from "next/link";
import { community } from "@/lib/amenities";
import { AmenityMap } from "@/components/AmenityMap";

type AmenityMapSectionProps = {
  /** e.g. "compact" for tighter vertical spacing on inner pages */
  variant?: "default" | "compact";
};

export function AmenityMapSection({ variant = "default" }: AmenityMapSectionProps) {
  const spacing = variant === "compact" ? "mt-10" : "mt-16";

  return (
    <section className={spacing} aria-labelledby="whats-nearby-heading">
      <h2
        id="whats-nearby-heading"
        className="text-2xl font-semibold text-gray-900 dark:text-white"
      >
        Life Near {community.name}
      </h2>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Explore grocery, parks, dining, healthcare, schools, and more around {community.name} in{" "}
        {community.city}. Use the map filters to switch categories, or view the full guide on our{" "}
        <Link
          href="/amenities"
          className="font-medium text-gray-900 underline underline-offset-4 dark:text-white"
        >
          Nearby Amenities page
        </Link>
        .
      </p>
      <div className="mt-6">
        <AmenityMap />
      </div>
      <p className="mt-4">
        <Link
          href="/amenities"
          className="inline-flex rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Full nearby amenities guide
        </Link>
      </p>
    </section>
  );
}
