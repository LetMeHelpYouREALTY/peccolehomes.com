import Link from "next/link";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { EditorialImage } from "@/components/EditorialImage";
import { FaqList } from "@/components/FaqList";
import { marketFaqs } from "@/lib/faqs";
import { usd } from "@/lib/format";
import { closedSales, marketSources, septemberNeighborhood } from "@/lib/market";
import { pageMeta } from "@/lib/seo";

const title = "Peccole Ranch Market Report | Sept 2026";
const description =
  "Peccole Ranch market report for September 2026: median sold price, days on market, sale-to-list, and recent closed sales.";
const answer =
  "In September 2026, Peccole Ranch’s median sold price was $595,000 and the median list price was $522,475. Realtor.com counted 67 active listings and a 42-day median on market. Homes sold at 98 percent of list. ZIP 89117 is a wider area than this neighborhood.";

export async function generateMetadata() {
  return pageMeta({ title, description, path: "/market" });
}

export default function MarketPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-16">
      <WebPageJsonLd name={title} description={answer} path="/market" />
      <ArticleJsonLd headline={title} description={answer} path="/market" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Market report" },
        ]}
      />
      <FaqJsonLd faqs={marketFaqs} />

      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        Market
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
        Peccole Ranch market report
      </h1>
      <p className="mt-3 text-sm text-muted">Figures dated below. Page compiled October 12, 2026.</p>
      <p className="mt-6 max-w-2xl text-lg text-muted" data-aeo-answer>
        {answer}
      </p>

      <EditorialImage
        src="/images/market/september-closings.webp"
        alt="Stucco homes and desert landscaping at golden hour, illustrating the Peccole Ranch market report"
        priority
      />

      <section aria-labelledby="neighborhood-heading">
        <h2 id="neighborhood-heading" className="font-display text-4xl font-medium">
          Neighborhood figures, September 2026
        </h2>
        <ul className="mt-6 max-w-3xl space-y-3 text-muted">
          <li>Median sold price: {usd(septemberNeighborhood.medianSold)}. September 2026.</li>
          <li>Median list price: {usd(septemberNeighborhood.medianList)}. September 2026.</li>
          <li>Price per square foot: ${septemberNeighborhood.pricePerSqft}. September 2026.</li>
          <li>
            Active listings: {septemberNeighborhood.activeListings}.{" "}
            {septemberNeighborhood.activeListingsMom}. {septemberNeighborhood.activeListingsYoy}.
          </li>
          <li>Median days on market: {septemberNeighborhood.medianDom}. September 2026.</li>
          <li>
            Sale-to-list: {septemberNeighborhood.saleToList}. Homes sold{" "}
            {septemberNeighborhood.belowAsk}. September 2026.
          </li>
        </ul>
        <p className="mt-4 text-sm text-muted">
          Source:{" "}
          <a href={septemberNeighborhood.sourceUrl} className="underline underline-offset-4">
            {septemberNeighborhood.sourceName}
          </a>
          . Retrieved October 12, 2026. A dedicated 90-day inventory series for Peccole Ranch alone
          was not published as one table. The month-over-month and year-over-year listing counts are
          the trend lines that source did publish.
        </p>
      </section>

      <section className="mt-16" aria-labelledby="closings-heading">
        <h2 id="closings-heading" className="font-display text-4xl font-medium">
          Recent closed sales
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          These are closed records inside the last 60 days before October 12, 2026. They are not
          offers, and they are not estimates.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[48rem] text-left text-sm">
            <caption className="sr-only">Recent Peccole Ranch closed sales</caption>
            <thead className="text-[0.72rem] uppercase tracking-[0.14em] text-stone">
              <tr className="border-b border-line/20">
                <th className="py-3 pr-4 font-medium">Address</th>
                <th className="py-3 pr-4 font-medium">List</th>
                <th className="py-3 pr-4 font-medium">Close</th>
                <th className="py-3 pr-4 font-medium">Ratio</th>
                <th className="py-3 font-medium">Close date</th>
              </tr>
            </thead>
            <tbody>
              {closedSales.map((sale) => (
                <tr key={sale.address} className="border-b border-line/10 align-top">
                  <td className="py-4 pr-4">
                    {sale.address}
                    <span className="mt-1 block text-muted">{sale.subdivision}</span>
                    <span className="mt-1 block text-muted">{sale.facts}</span>
                    <span className="mt-1 block text-muted">Listed {sale.listDate}. {sale.dom}</span>
                    <a href={sale.sourceUrl} className="mt-1 inline-block underline underline-offset-4">
                      {sale.sourceLabel}
                    </a>
                  </td>
                  <td className="py-4 pr-4">{usd(sale.listPrice)}</td>
                  <td className="py-4 pr-4">{usd(sale.closePrice)}</td>
                  <td className="py-4 pr-4">{sale.ratio}</td>
                  <td className="py-4">{sale.closeDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="zip-heading">
        <h2 id="zip-heading" className="font-display text-4xl font-medium">
          ZIP 89117 is wider than Peccole Ranch
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          A ZIP report checked October 11, 2026 listed a $724,999 median list price for 89117.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          That same report showed about 7 months of inventory and a 28-day median over the last 90 days.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Those ZIP figures include more than Peccole Ranch. They are not the neighborhood median above.
        </p>
        <p className="mt-4 text-sm text-muted">
          Source:{" "}
          <a href={marketSources.nregZip89117} className="underline underline-offset-4">
            89117 market report, inventory checked October 11, 2026
          </a>
          .
        </p>
        <p className="mt-6">
          <Link href="/sellers" className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4">
            Price a specific Peccole Ranch address
          </Link>
        </p>
      </section>

      <section className="mt-16" aria-labelledby="gaps-heading">
        <h2 id="gaps-heading" className="font-display text-4xl font-medium">
          Figures this page does not use
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          A trailing-twelve-month median through the first quarter of 2026 is older than 60 days. It is not used as the current median.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Automated home-value estimates are not quoted. Closed prices above come from MLS history pages.
        </p>
      </section>

      <FaqList faqs={marketFaqs} heading="Market questions" id="market-faq-heading" />
    </article>
  );
}
