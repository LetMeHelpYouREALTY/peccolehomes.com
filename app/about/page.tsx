import Link from "next/link";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { agent, fullAddress, nap } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const title = "About Dr. Jan Duffy | Peccole Ranch";
const description =
  "Dr. Jan Duffy, REALTOR®, Nevada license S.0197614.LLC, serves Peccole Ranch buyers and sellers at 9501 Red Hills Rd.";
const answer =
  "Dr. Jan Duffy, REALTOR®, holds Nevada license S.0197614.LLC and works with Peccole Ranch buyers and sellers. This site covers homes for sale, valuations, and the September 2026 market record. The published address is 9501 Red Hills Rd, Las Vegas, NV 89117. Call (702) 500-0810.";

export async function generateMetadata() {
  return pageMeta({ title, description, path: "/about" });
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <WebPageJsonLd name={title} description={answer} path="/about" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About" },
        ]}
      />
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        About
      </p>
      <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
        About Dr. Jan Duffy
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted" data-aeo-answer>
        {answer}
      </p>
      <section className="mt-12 max-w-3xl" aria-labelledby="practice-heading">
        <h2 id="practice-heading" className="font-display text-4xl font-medium">
          This practice, in this place
        </h2>
        <p className="mt-4 text-muted">
          {agent.name}, {agent.credential}, Nevada license {agent.license}.
        </p>
        <p className="mt-4 text-muted">
          The work on this site is Peccole Ranch: listings, a valuation booking, and dated local figures.
        </p>
        <p className="mt-4 text-muted">
          Sales totals and personal history are not stated here unless a source on the market page documents them.
        </p>
        <p className="mt-4 text-muted">
          Office address: {fullAddress}. Phone: {nap.phone}.
        </p>
        <p className="mt-8">
          <Link href="/contact" className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4">
            Contact Dr. Jan Duffy
          </Link>
        </p>
      </section>
    </div>
  );
}
