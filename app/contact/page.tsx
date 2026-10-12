import Link from "next/link";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { EditorialImage } from "@/components/EditorialImage";
import { ValuationForm } from "@/components/ValuationForm";
import { directionsUrl, fullAddress, nap } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const title = "Contact Dr. Jan Duffy | Peccole Ranch";
const description =
  "Contact Dr. Jan Duffy at (702) 500-0810. Visit 9501 Red Hills Rd, Las Vegas, NV 89117, or book a Peccole Ranch valuation.";
const answer =
  "Contact Dr. Jan Duffy for Peccole Ranch homes at (702) 500-0810. The published address is 9501 Red Hills Rd, Las Vegas, NV 89117. Use the form to open a valuation booking, or use the map for directions. Agent office hours are by appointment on that phone line.";

export async function generateMetadata() {
  return pageMeta({ title, description, path: "/contact" });
}

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <WebPageJsonLd name={title} description={answer} path="/contact" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact" },
        ]}
      />
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        Contact
      </p>
      <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
        Contact Dr. Jan Duffy
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted" data-aeo-answer>
        {answer}
      </p>

      <EditorialImage
        src="/images/contact/west-las-vegas-entry.webp"
        alt="Low desert building and gravel walk at golden hour, illustrating the Peccole Ranch contact page"
        priority
      />

      <section aria-labelledby="reach-heading">
        <h2 id="reach-heading" className="font-display text-4xl font-medium">
          Phone, address, and map
        </h2>
        <address className="mt-4 not-italic text-muted">
          {nap.businessName}
          <br />
          {fullAddress}
        </address>
        <p className="mt-4">
          <a href={`tel:${nap.phoneTel}`} className="text-ink">
            Call {nap.phone}
          </a>
        </p>
        <p className="mt-3">
          <a href={directionsUrl} className="text-sm underline underline-offset-4">
            Directions
          </a>
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          The Peccole Ranch Community Association also publishes this street address, with office hours
          Monday through Friday, 7:30 a.m. to 4:00 p.m., closed 12:00 to 1:00 p.m. Those hours are the
          association’s, reviewed on its site October 12, 2026. They are not a published schedule for
          Dr. Jan Duffy.
        </p>
        <div className="mt-8 h-80 overflow-hidden border border-line/15">
          <iframe
            title="Map of 9501 Red Hills Rd, Las Vegas, NV 89117"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
      </section>

      <section className="mt-16" aria-labelledby="form-heading">
        <h2 id="form-heading" className="font-display text-4xl font-medium">
          Valuation request
        </h2>
        <ValuationForm />
      </section>
    </div>
  );
}
