import Link from "next/link";
import { agent, brokerage, directionsUrl, fullAddress, nap } from "@/lib/site";

const links = [
  { href: "/sellers", label: "Sell my Peccole Ranch home" },
  { href: "/buyers", label: "Buy in Peccole Ranch" },
  { href: "/market", label: "Peccole Ranch market report" },
  { href: "/peccole-ranch", label: "Peccole Ranch community guide" },
  { href: "/golf-and-gated", label: "Queensridge and Canyon Gate" },
  { href: "/new-construction", label: "New construction" },
  { href: "/about", label: "About Dr. Jan Duffy" },
  { href: "/faq", label: "Peccole Ranch questions" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line/15 bg-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-stone">Visit</p>
          <address className="mt-4 not-italic text-ink">
            <span className="font-medium">{nap.businessName}</span>
            <br />
            {nap.street}
            <br />
            {nap.city}, {nap.state} {nap.zip}
          </address>
          <p className="mt-4">
            <a href={`tel:${nap.phoneTel}`} className="text-ink">
              Call {nap.phone}
            </a>
          </p>
          <p className="mt-3">
            <a href={directionsUrl} className="text-sm text-muted underline underline-offset-4">
              Directions to {fullAddress}
            </a>
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-3 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line/15">
        <div className="mx-auto max-w-6xl space-y-3 px-4 py-8 text-sm text-muted">
          <p>{brokerage.name}</p>
          <p>
            {agent.name}, {agent.credential} | Nevada License {agent.license}
          </p>
          <p>Equal Housing Opportunity.</p>
          <p>
            Listing information is deemed reliable but is not guaranteed. Photographs on this site are
            illustrative. They are not listings and they do not show a specific address.
          </p>
          <p>
            © {new Date().getFullYear()} {nap.businessName}.{" "}
            <a href="/llms.txt" className="underline underline-offset-4">
              llms.txt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
