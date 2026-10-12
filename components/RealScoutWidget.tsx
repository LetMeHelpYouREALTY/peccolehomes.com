"use client";

import { realScoutAgentEncodedId } from "@/lib/site";

type RealScoutWidgetProps = {
  heading?: string;
};

/**
 * RealScout search and office listings.
 * The script is loaded once in the root layout.
 */
export function RealScoutWidget({
  heading = "Search Peccole Ranch homes",
}: RealScoutWidgetProps) {
  const searchMarkup = `<realscout-simple-search agent-encoded-id="${realScoutAgentEncodedId}" placeholder="Search Peccole Ranch homes" widget-width="100%"></realscout-simple-search>`;
  const officeListingsMarkup = [
    `<realscout-office-listings`,
    ` agent-encoded-id="${realScoutAgentEncodedId}"`,
    ` sort-order="STATUS_AND_SIGNIFICANT_CHANGE"`,
    ` listing-status="For Sale"`,
    ` property-types="SFR,MF"`,
    ` price-min="0"`,
    ` price-max="9999999"`,
    `></realscout-office-listings>`,
  ].join("");

  return (
    <section id="listings" className="mt-16" aria-label="Peccole Ranch home search">
      <h2 className="font-display text-4xl font-medium tracking-tight text-ink">{heading}</h2>
      <p className="mt-4 max-w-2xl text-muted">
        Current for-sale homes load in the widget below. Confirm price, HOA, and terms on the live listing.
      </p>
      <div className="mt-6 min-h-[120px] w-full" dangerouslySetInnerHTML={{ __html: searchMarkup }} />
      <h3 className="mt-12 font-display text-3xl font-medium text-ink">Peccole Ranch homes for sale</h3>
      <div
        className="mt-4 min-h-[320px] w-full"
        dangerouslySetInnerHTML={{ __html: officeListingsMarkup }}
      />
      <p className="mt-4 text-sm text-muted">
        Listing data is supplied through the search widget and the Greater Las Vegas Association of
        REALTORS® MLS where the widget displays it. Information is deemed reliable but not guaranteed.
      </p>
    </section>
  );
}
