import type { Faq } from "@/lib/faqs";

type FaqListProps = {
  faqs: Faq[];
  heading: string;
  id: string;
};

export function FaqList({ faqs, heading, id }: FaqListProps) {
  return (
    <section className="mt-20" aria-labelledby={id}>
      <h2 id={id} className="font-display text-4xl font-medium tracking-tight text-ink">
        {heading}
      </h2>
      <dl className="mt-8 divide-y divide-line/15 border-y border-line/15">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-6">
            <dt className="text-lg text-ink">{faq.question}</dt>
            <dd className="mt-3 max-w-3xl text-muted">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
