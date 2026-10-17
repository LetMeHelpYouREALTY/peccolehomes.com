import Link from "next/link";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { EditorialImage } from "@/components/EditorialImage";
import { FaqList } from "@/components/FaqList";
import { ValuationForm } from "@/components/ValuationForm";
import { sellerFaqs } from "@/lib/faqs";
import { usd } from "@/lib/format";
import { marketSources, septemberNeighborhood } from "@/lib/market";
import { pageMeta } from "@/lib/seo";

const title = "Sell a Peccole Ranch Home | Valuation";
const description =
  "Sell a Peccole Ranch home with September 2026 pricing, HOA disclosure steps, and a valuation booking. Call (702) 500-0810.";
const answer =
  "Selling a Peccole Ranch home starts with September 2026 closings, not a national average. The neighborhood median sold price was $595,000. Homes sold at 98 percent of list. Your address, HOA, and condition still set the number. Call (702) 500-0810 to book it.";

export async function generateMetadata() {
  return pageMeta({ title, description, path: "/sellers" });
}

export default function SellersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <WebPageJsonLd name={title} description={answer} path="/sellers" />
      <BreadcrumbJsonLd
        path="/sellers"
        items={[
          { name: "Home", path: "/" },
          { name: "Sell" },
        ]}
      />
      <FaqJsonLd faqs={sellerFaqs} path="/sellers" />

      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        Sell
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
        Sell my Peccole Ranch home
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted" id="answer" data-aeo-answer>
        {answer}
      </p>

      <section className="mt-14" aria-labelledby="valuation-heading">
        <h2 id="valuation-heading" className="font-display text-4xl font-medium">
          Request a home valuation
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Enter the address you want priced. The next screen is the listing consultation calendar.
        </p>
        <ValuationForm />
      </section>

      <EditorialImage
        src="/images/sellers/pricing-strategy.webp"
        alt="Quiet desert-modern interior opening to the mountains, illustrating a Peccole Ranch pricing conversation"
        priority
      />

      <section aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="font-display text-4xl font-medium">
          Pricing strategy for this area
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          In September 2026, the median sold price was {usd(septemberNeighborhood.medianSold)}.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          The median list price was {usd(septemberNeighborhood.medianList)}, with{" "}
          {septemberNeighborhood.activeListings} homes listed.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Median days on market was {septemberNeighborhood.medianDom}. Sale-to-list was{" "}
          {septemberNeighborhood.saleToList}.
        </p>
        <p className="mt-4 max-w-3xl text-sm text-muted">
          Source:{" "}
          <a href={septemberNeighborhood.sourceUrl} className="underline underline-offset-4">
            {septemberNeighborhood.sourceName}
          </a>
          , September 2026. Retrieved October 12, 2026.
        </p>
        <p className="mt-6">
          <Link href="/market" className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4">
            Compare recent Peccole Ranch closings
          </Link>
        </p>
      </section>

      <section className="mt-16" aria-labelledby="prep-heading">
        <h2 id="prep-heading" className="font-display text-4xl font-medium">
          Prep and staging for local home styles
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Closed sales on this site were built from 1989 to 1998, mostly stucco single-family homes.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Queensridge listings are often larger custom plans. One Queensridge Place is a high-rise condominium.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Photograph desert light, clean roof lines, and the xeriscape. Repair items the resale certificate will flag.
        </p>
        <p className="mt-4 max-w-3xl text-sm text-muted">
          Style notes draw on the{" "}
          <a href={marketSources.nregQueensridge} className="underline underline-offset-4">
            Queensridge guide updated October 11, 2026
          </a>{" "}
          and the closed-sale records on the market page.
        </p>
      </section>

      <section className="mt-16" aria-labelledby="hoa-heading">
        <h2 id="hoa-heading" className="font-display text-4xl font-medium">
          HOA and disclosure steps
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Order the Nevada resale package when escrow opens. It lists dues, unpaid sums, and association litigation.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          A buyer may cancel until midnight of the fifth calendar day after receiving that package.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Peccole Ranch often stacks a master association and a sub-association. Quote both, not one line.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          No single transfer-fee dollar amount for this community was found on October 12, 2026.
        </p>
        <p className="mt-4 max-w-3xl text-sm text-muted">
          Process source:{" "}
          <a href={marketSources.redResalePackage} className="underline underline-offset-4">
            Nevada Real Estate Division resale-package flowchart, revised January 2026
          </a>
          .
        </p>
        <p className="mt-6">
          <Link href="/buyers" className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4">
            See the Peccole Ranch HOA comparison
          </Link>
        </p>
      </section>

      <FaqList faqs={sellerFaqs} heading="Seller questions" id="seller-faq-heading" />
    </div>
  );
}
