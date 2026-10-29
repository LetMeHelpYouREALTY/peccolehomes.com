import Image from "next/image";
import Link from "next/link";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { FaqList } from "@/components/FaqList";
import { RealScoutWidget } from "@/components/RealScoutWidget";
import { homeFaqs } from "@/lib/faqs";
import { usd } from "@/lib/format";
import { septemberNeighborhood } from "@/lib/market";
import { pageMeta } from "@/lib/seo";
import { nap } from "@/lib/site";
import FeaturedListing from "@/components/sections/FeaturedListing";

const title = "Peccole Ranch Homes for Sale | Las Vegas";
const description =
  "Peccole Ranch homes for sale in west Las Vegas, ZIP 89117. September 2026 median sold price was $595,000. Call (702) 500-0810.";

export async function generateMetadata() {
  return pageMeta({ title, description, path: "/" });
}

const answer =
  "Peccole Ranch homes for sale sit in west Las Vegas, beside Summerlin, mainly in ZIP 89117. In September 2026 the median sold price was $595,000, with 67 homes listed. Median days on market was 42. Sale-to-list was 98 percent. Call (702) 500-0810.";

export default function HomePage() {
  return (
    <div>
      <WebPageJsonLd
        name="Peccole Ranch homes for sale"
        description={answer}
        path="/"
      />
      <FaqJsonLd faqs={homeFaqs} path="/" />

      <section className="relative min-h-[80vh] bg-[#12100E] text-[#F6F1E8]">
        <Image
          src="/images/home/peccole-ranch-homes-for-sale.webp"
          alt="Desert-modern home and red rock cliffs at golden hour, illustrating Peccole Ranch homes for sale"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#12100E]/72" />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-end px-4 py-16">
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#D8C4A0]">
            West Las Vegas · ZIP 89117
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
            Peccole Ranch homes for sale
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F6F1E8]" id="answer" data-aeo-answer>
            {answer}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/sellers"
              className="inline-flex justify-center border border-[#F6F1E8] bg-[#F6F1E8] px-6 py-3 text-center text-[0.72rem] uppercase tracking-[0.18em] text-[#12100E]"
            >
              Sell my Peccole Ranch home
            </Link>
            <Link
              href="/buyers"
              className="inline-flex justify-center border border-[#F6F1E8] px-6 py-3 text-center text-[0.72rem] uppercase tracking-[0.18em] text-[#F6F1E8]"
            >
              Buy in Peccole Ranch
            </Link>
          </div>
        </div>
      </section>
      <p className="mx-auto max-w-6xl px-4 pt-3 text-[0.72rem] uppercase tracking-[0.18em] text-muted">
        Illustrative photograph. Not a listing.
      </p>
      <FeaturedListing
        phone={nap.phone}
        phoneHref={`tel:${nap.phoneTel}`}
        siteHost="peccolehomes.com"
      />


      <div className="mx-auto max-w-6xl px-4 py-20">
        <section aria-labelledby="snapshot-heading">
          <h2
            id="snapshot-heading"
            className="font-display text-4xl font-medium tracking-tight"
          >
            September 2026 snapshot
          </h2>
          <dl className="mt-8 grid gap-8 border-y border-line/15 py-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">Median sold</dt>
              <dd className="mt-2 font-display text-4xl">{usd(septemberNeighborhood.medianSold)}</dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">Active listings</dt>
              <dd className="mt-2 font-display text-4xl">{septemberNeighborhood.activeListings}</dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">Median days</dt>
              <dd className="mt-2 font-display text-4xl">{septemberNeighborhood.medianDom}</dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">Sale-to-list</dt>
              <dd className="mt-2 font-display text-4xl">{septemberNeighborhood.saleToList}</dd>
            </div>
          </dl>
          <p className="max-w-3xl text-muted">
            These four figures describe Peccole Ranch in September 2026. They come from{" "}
            <a
              href={septemberNeighborhood.sourceUrl}
              className="underline underline-offset-4"
            >
              {septemberNeighborhood.sourceName}
            </a>
            . They are not a value for one house.
          </p>
          <p className="mt-6">
            <Link href="/market" className="text-[0.72rem] uppercase tracking-[0.18em] text-ink underline underline-offset-4">
              Read the Peccole Ranch market report
            </Link>
          </p>
        </section>

        <section className="mt-20" aria-labelledby="paths-heading">
          <h2 id="paths-heading" className="font-display text-4xl font-medium tracking-tight">
            Two paths from here
          </h2>
          <div className="mt-8 grid gap-12 md:grid-cols-2">
            <div className="border-t border-line/20 pt-6">
              <h3 className="font-display text-3xl">Sell my Peccole Ranch home</h3>
              <p className="mt-4 text-muted">
                A valuation starts with your address, the September closings, and the HOA certificate.
              </p>
              <p className="mt-6">
                <Link href="/sellers" className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4">
                  Request a Peccole Ranch valuation
                </Link>
              </p>
            </div>
            <div className="border-t border-line/20 pt-6">
              <h3 className="font-display text-3xl">Buy in Peccole Ranch</h3>
              <p className="mt-4 text-muted">
                Compare open streets, guard-gated Queensridge, and Canyon Gate before you tour.
              </p>
              <p className="mt-6">
                <Link href="/buyers" className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4">
                  Open the Peccole Ranch buyer guide
                </Link>
              </p>
            </div>
          </div>
        </section>

        <RealScoutWidget />

        <section className="mt-20" aria-labelledby="call-heading">
          <h2 id="call-heading" className="font-display text-4xl font-medium">
            Call the Peccole Ranch desk
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Dr. Jan Duffy answers at {nap.phone}. The address is {nap.street}, {nap.city}, {nap.state}{" "}
            {nap.zip}.
          </p>
          <p className="mt-6">
            <a
              href={`tel:${nap.phoneTel}`}
              className="inline-flex border border-ink px-6 py-3 text-[0.72rem] uppercase tracking-[0.18em]"
            >
              Call {nap.phone}
            </a>
          </p>
        </section>

        <FaqList faqs={homeFaqs} heading="Peccole Ranch questions" id="home-faq-heading" />
      </div>
    </div>
  );
}
