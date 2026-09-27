import Link from "next/link";
import { nap, fullAddress, directionsUrl, googleReviewsUrl } from "@/lib/site";

export function Footer() {
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Visit us
            </h3>
            <address className="mt-2 not-italic text-gray-700 dark:text-gray-300">
              <span className="font-medium">{nap.businessName}</span>
              <br />
              {nap.street}
              <br />
              {nap.city}, {nap.state} {nap.zip}
            </address>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`tel:${nap.phoneTel}`}
                className="inline-flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Call
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Directions
              </a>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                View Google Reviews
              </a>
            </div>
          </div>
          <div className="h-64 min-h-[200px] overflow-hidden rounded-lg">
            <iframe
              title="Office location map"
              src={mapEmbedUrl}
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
        <nav className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <Link href="/amenities" className="hover:text-gray-900 dark:hover:text-white">
            Nearby amenities
          </Link>
          <Link href="/peccole-ranch" className="hover:text-gray-900 dark:hover:text-white">
            Peccole Ranch
          </Link>
          <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white">
            Contact
          </Link>
        </nav>
        <p className="mt-6 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          © 2025 Peccole Homes. Peccole Ranch, Las Vegas. © 2025 Berkshire Hathaway HomeServices Nevada Properties - Comprehensive Real Estate Services by Dr. Jan Duffy S.0197614. All rights reserved.{" "}
          <a href="/llms.txt" className="underline hover:no-underline" rel="alternate" type="text/plain" title="Site summary for AI/LLM crawlers">
            llms.txt
          </a>
        </p>
      </div>
    </footer>
  );
}
