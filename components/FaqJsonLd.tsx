import { fragmentUrl, webpageId } from "@/lib/entity";

type FaqEntry = {
  question: string;
  answer: string;
};

type FaqJsonLdProps = {
  faqs: FaqEntry[];
  path: string;
};

export function FaqJsonLd({ faqs, path }: FaqJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": fragmentUrl(path, "faq"),
    isPartOf: { "@id": webpageId(path) },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
