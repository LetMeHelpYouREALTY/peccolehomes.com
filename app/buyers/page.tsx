import Link from "next/link";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { EditorialImage } from "@/components/EditorialImage";
import { FaqList } from "@/components/FaqList";
import { RealScoutWidget } from "@/components/RealScoutWidget";
import { buyerConsultationUrl } from "@/lib/calendly";
import { buyerFaqs } from "@/lib/faqs";
import { hoaRows, neighborhoodBands } from "@/lib/market";
import { ccsdLocatorUrl } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const title = "Buy in Peccole Ranch | Neighborhood Guide";
const description =
  "Buy in Peccole Ranch with sub-neighborhood price bands, HOA ranges, and resale versus the Lennar plan. Call (702) 500-0810.";
const answer =
  "Buying in Peccole Ranch means choosing among open streets and guard-gated enclaves in west Las Vegas. A September 19, 2026 guide counts 22 sub-neighborhoods, mostly resale. Lennar’s later plan is not today’s inventory. Confirm HOA dues on the certificate for that street.";

export async function generateMetadata() {
  return pageMeta({ title, description, path: "/buyers" });
}

export default function BuyersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <WebPageJsonLd name={title} description={answer} path="/buyers" />
      <BreadcrumbJsonLd
        path="/buyers"
        items={[
          { name: "Home", path: "/" },
          { name: "Buy" },
        ]}
      />
      <FaqJsonLd faqs={buyerFaqs} path="/buyers" />
      <ServiceJsonLd
        path="/buyers"
        serviceType="Buyer brokerage"
        name="Peccole Ranch buyer guidance"
        description={answer}
        bookingUrl={buyerConsultationUrl("buyers-service")}
      />

      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        Buy
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
        Buy in Peccole Ranch
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted" id="answer" data-aeo-answer>
        {answer}
      </p>

      <EditorialImage
        src="/images/buyers/neighborhood-guide.webp"
        alt="Landscaped desert paseo and stucco homes, illustrating a Peccole Ranch neighborhood guide"
        priority
      />

      <section aria-labelledby="neighborhoods-heading">
        <h2 id="neighborhoods-heading" className="font-display text-4xl font-medium">
          Neighborhood by neighborhood
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Price bands below are published ranges, not a quote for a house on the market today.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="sr-only">Peccole Ranch sub-neighborhood price bands</caption>
            <thead className="text-[0.72rem] uppercase tracking-[0.16em] text-stone">
              <tr className="border-b border-line/20">
                <th className="py-3 pr-4 font-medium">Area</th>
                <th className="py-3 pr-4 font-medium">Gate</th>
                <th className="py-3 pr-4 font-medium">Published range</th>
                <th className="py-3 font-medium">As of</th>
              </tr>
            </thead>
            <tbody>
              {neighborhoodBands.map((row) => (
                <tr key={row.name} className="border-b border-line/10 align-top">
                  <td className="py-4 pr-4 text-ink">
                    {row.name}
                    <span className="mt-1 block text-muted">{row.note}</span>
                  </td>
                  <td className="py-4 pr-4 text-muted">{row.gate}</td>
                  <td className="py-4 pr-4 text-ink">{row.prices}</td>
                  <td className="py-4 text-muted">
                    <a href={row.sourceUrl} className="underline underline-offset-4">
                      {row.published}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6">
          <Link
            href="/golf-and-gated"
            className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4"
          >
            Read about Queensridge and Canyon Gate
          </Link>
        </p>
      </section>

      <section className="mt-16" aria-labelledby="resale-heading">
        <h2 id="resale-heading" className="font-display text-4xl font-medium">
          New construction versus resale
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          The master plan launched in 1989. Most homes were built by the mid-2000s.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Lennar’s Preserve plan covers the former Badlands land, with timing described around 2028.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          No open builder incentive sheet was found for this community on October 12, 2026.
        </p>
        <p className="mt-6">
          <Link
            href="/new-construction"
            className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4"
          >
            See the Peccole Ranch new construction notes
          </Link>
        </p>
      </section>

      <section className="mt-16" aria-labelledby="representation-heading">
        <h2 id="representation-heading" className="font-display text-4xl font-medium">
          Builder representation
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Builder sales offices were not documented as open inside Peccole Ranch on October 12, 2026.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          If The Preserve releases homes, read the builder contract separately from a resale contract.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Until then, a buyer’s agent reviews resale terms, the HOA package, and the lot’s edge conditions.
        </p>
      </section>

      <section className="mt-16" aria-labelledby="hoa-heading">
        <h2 id="hoa-heading" className="font-display text-4xl font-medium">
          HOA comparison
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          These are published ranges. The resale certificate is the bill for a specific street.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="sr-only">Peccole Ranch HOA fee ranges</caption>
            <thead className="text-[0.72rem] uppercase tracking-[0.16em] text-stone">
              <tr className="border-b border-line/20">
                <th className="py-3 pr-4 font-medium">Association slice</th>
                <th className="py-3 pr-4 font-medium">Published fee</th>
                <th className="py-3 pr-4 font-medium">Gate</th>
                <th className="py-3 font-medium">As of</th>
              </tr>
            </thead>
            <tbody>
              {hoaRows.map((row) => (
                <tr key={row.name} className="border-b border-line/10 align-top">
                  <td className="py-4 pr-4">
                    {row.name}
                    <span className="mt-1 block text-muted">{row.includes}</span>
                  </td>
                  <td className="py-4 pr-4">{row.fee}</td>
                  <td className="py-4 pr-4 text-muted">{row.gate}</td>
                  <td className="py-4">
                    <a href={row.sourceUrl} className="underline underline-offset-4">
                      {row.published}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-muted">
          School assignment is by address. Use the{" "}
          <a href={ccsdLocatorUrl} className="underline underline-offset-4">
            Clark County School District locator
          </a>
          . Names only are listed in the questions below.
        </p>
      </section>

      <p className="mt-10">
        <a
          href={buyerConsultationUrl("buyers-page")}
          className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4"
        >
          Book a buyer consultation
        </a>
      </p>

      <RealScoutWidget heading="Search Peccole Ranch homes" />

      <FaqList faqs={buyerFaqs} heading="Buyer questions" id="buyer-faq-heading" />
    </div>
  );
}
