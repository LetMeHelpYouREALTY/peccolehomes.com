import Link from "next/link";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { EditorialImage } from "@/components/EditorialImage";
import { FaqList } from "@/components/FaqList";
import { constructionFaqs } from "@/lib/faqs";
import { marketSources } from "@/lib/market";
import { pageMeta } from "@/lib/seo";

const title = "Peccole Ranch New Construction | Lennar";
const description =
  "Peccole Ranch resale is largely built out. Lennar’s Preserve plan on the former Badlands site is described around 2028.";
const answer =
  "Peccole Ranch new construction is not an open sales release in the sources reviewed on October 12, 2026. Most homes are resales from a plan launched in 1989. Lennar’s Preserve plan on the former Badlands golf land is described at about 1,480 homes, timed around 2028. No current incentive sheet was found.";

export async function generateMetadata() {
  return pageMeta({ title, description, path: "/new-construction" });
}

export default function NewConstructionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <WebPageJsonLd name={title} description={answer} path="/new-construction" />
      <BreadcrumbJsonLd
        path="/new-construction"
        items={[
          { name: "Home", path: "/" },
          { name: "Buy", path: "/buyers" },
          { name: "New construction" },
        ]}
      />
      <FaqJsonLd faqs={constructionFaqs} path="/new-construction" />

      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
        <Link href="/buyers" className="hover:text-ink">
          Buy in Peccole Ranch
        </Link>
        <span aria-hidden="true"> / </span>
        New homes
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
        Peccole Ranch new construction
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted" id="answer" data-aeo-answer>
        {answer}
      </p>

      <EditorialImage
        src="/images/new-construction/former-course-land.webp"
        alt="Open desert land beside distant stucco rooftops at golden hour, illustrating future Peccole Ranch construction"
        priority
      />

      <section aria-labelledby="resale-heading">
        <h2 id="resale-heading" className="font-display text-4xl font-medium">
          What is for sale now
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          The living inventory is resale: single-family homes, gated enclaves, and the Queensridge towers.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          National builders worked phases from 1989 into the 2000s. Those phases are not current sales offices.
        </p>
        <p className="mt-6">
          <Link href="/#listings" className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4">
            Search Peccole Ranch homes for sale
          </Link>
        </p>
      </section>

      <section className="mt-16" aria-labelledby="preserve-heading">
        <h2 id="preserve-heading" className="font-display text-4xl font-medium">
          Lennar and The Preserve
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Badlands ceased operation in December 2016. The City Council action described in the guide is dated December 2024.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          The filed concept is called The Preserve: about 255 acres, about 1,480 homes, and more than 100 acres of open space.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Timing in that guide is around 2028. Product mix includes single-family homes plus attached homes and condominiums.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Lots that once faced the course should be read against that plan, not against a permanent fairway.
        </p>
        <p className="mt-4 text-sm text-muted">
          Source:{" "}
          <a href={marketSources.nregPeccole} className="underline underline-offset-4">
            Peccole Ranch guide, updated September 19, 2026
          </a>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="incentives-heading">
        <h2 id="incentives-heading" className="font-display text-4xl font-medium">
          Incentives
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          No builder incentive, rate buydown, or closing-credit sheet for this site was found on October 12, 2026.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          That absence is a research gap, not a claim that incentives will be zero later.
        </p>
      </section>

      <FaqList faqs={constructionFaqs} heading="New construction questions" id="construction-faq-heading" />
    </div>
  );
}
