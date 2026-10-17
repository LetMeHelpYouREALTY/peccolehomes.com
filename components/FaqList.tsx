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
      <div className="mt-8 divide-y divide-line/15 border-y border-line/15">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-6">
            <h3 className="text-lg font-medium text-ink">{faq.question}</h3>
            <p className="mt-3 max-w-3xl text-muted">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
