import Link from "next/link";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { FaqList } from "@/components/FaqList";
import { allFaqs } from "@/lib/faqs";
import { pageMeta } from "@/lib/seo";

const title = "Peccole Ranch Real Estate FAQs";
const description =
  "Answers on Peccole Ranch HOA fees, sale speed, gates, school names, and the September 2026 median sold price.";
const answer =
  "These Peccole Ranch questions cover location, September 2026 prices, HOA ranges, gates, school names, and the path to a valuation. Each answer uses a dated local source or says when a figure was not found. Call (702) 500-0810 for a specific address.";

export async function generateMetadata() {
  return pageMeta({ title, description, path: "/faq" });
}

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <WebPageJsonLd name={title} description={answer} path="/faq" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ" },
        ]}
      />
      <FaqJsonLd faqs={allFaqs} />
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        FAQ
      </p>
      <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
        Peccole Ranch questions
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted" data-aeo-answer>
        {answer}
      </p>
      <FaqList faqs={allFaqs} heading="All questions on this site" id="all-faq-heading" />
    </div>
  );
}
