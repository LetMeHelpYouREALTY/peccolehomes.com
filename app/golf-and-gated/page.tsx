import Link from "next/link";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { EditorialImage } from "@/components/EditorialImage";
import { FaqList } from "@/components/FaqList";
import { golfFaqs } from "@/lib/faqs";
import { marketSources } from "@/lib/market";
import { pageMeta } from "@/lib/seo";

const title = "Queensridge and Canyon Gate Homes";
const description =
  "Queensridge and Canyon Gate sit inside Peccole Ranch. Compare guard gates, golf membership, and 2026 HOA ranges.";
const answer =
  "Queensridge and Canyon Gate are guard-gated parts of the Peccole Ranch master plan in west Las Vegas. Queensridge is about 987 custom homes. Canyon Gate surrounds a private golf course opened in 1989. Club membership is optional and is not the same bill as the HOA.";

export async function generateMetadata() {
  return pageMeta({ title, description, path: "/golf-and-gated" });
}

export default function GolfAndGatedPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <WebPageJsonLd name={title} description={answer} path="/golf-and-gated" />
      <BreadcrumbJsonLd
        path="/golf-and-gated"
        items={[
          { name: "Home", path: "/" },
          { name: "Buy", path: "/buyers" },
          { name: "Golf and gated" },
        ]}
      />
      <FaqJsonLd faqs={golfFaqs} path="/golf-and-gated" />

      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
        <Link href="/buyers" className="hover:text-ink">
          Buy in Peccole Ranch
        </Link>
        <span aria-hidden="true"> / </span>
        Golf and gated
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
        Queensridge and Canyon Gate homes
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted" id="answer" data-aeo-answer>
        {answer}
      </p>

      <EditorialImage
        src="/images/golf-and-gated/fairway-and-estates.webp"
        alt="Desert golf fairway, sand bunkers, and stucco estates at golden hour near red rock cliffs"
        ratio="16/9"
        priority
      />

      <section aria-labelledby="queensridge-heading">
        <h2 id="queensridge-heading" className="font-display text-4xl font-medium">
          Queensridge
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          A guide updated October 11, 2026 describes 987 guard-gated homes along Charleston, between Rampart and Hualapai.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Published prices run from about $725,000 to more than $5 million.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Combined monthly dues, including layered associations, were published at about $315 to $585.
        </p>
        <p className="mt-4 text-sm text-muted">
          Source:{" "}
          <a href={marketSources.nregQueensridge} className="underline underline-offset-4">
            Queensridge guide, updated October 11, 2026
          </a>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="towers-heading">
        <h2 id="towers-heading" className="font-display text-4xl font-medium">
          One Queensridge Place
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          The same research set describes twin 18-story towers with about 219 condominiums, completed in 2008 and 2009.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Published prices run from about $500,000 to more than $4 million.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Published dues run from $1,200 to $2,400 a month, varying with the unit.
        </p>
        <p className="mt-4 text-sm text-muted">
          Source:{" "}
          <a href={marketSources.nregPeccole} className="underline underline-offset-4">
            Peccole Ranch guide, updated September 19, 2026
          </a>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="canyon-heading">
        <h2 id="canyon-heading" className="font-display text-4xl font-medium">
          Canyon Gate
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          The guide places Canyon Gate on about 330 acres around a course that opened in 1989.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Published home prices run from about $700,000 to $1,650,000. HOA dues were published at $200 to $285 a month.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Golf membership is optional. Golf initiation was listed as inquire-only on the guide’s reading of the club page.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Published lifestyle tiers were $295 a month for racquet sports and $250 a month for social, plus a $10 enrollment fee.
        </p>
        <p className="mt-6">
          <Link href="/buyers" className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4">
            Compare all Peccole Ranch HOA ranges
          </Link>
        </p>
      </section>

      <FaqList faqs={golfFaqs} heading="Golf and gate questions" id="golf-faq-heading" />
    </div>
  );
}
