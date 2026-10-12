import Link from "next/link";
import { nap } from "@/lib/site";

const links = [
  { href: "/buyers", label: "Buy" },
  { href: "/sellers", label: "Sell" },
  { href: "/market", label: "Market" },
  { href: "/peccole-ranch", label: "Community" },
  { href: "/golf-and-gated", label: "Golf and gated" },
  { href: "/new-construction", label: "New homes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLinks({ className }: { className: string }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="hover:text-ink">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  return (
    <header className="border-b border-line/15 bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-display text-3xl font-medium tracking-tight text-ink">
          Peccole Homes
        </Link>
        <a href={`tel:${nap.phoneTel}`} className="text-sm tracking-wide text-ink">
          {nap.phone}
        </a>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <details className="md:hidden">
          <summary className="cursor-pointer text-[0.72rem] uppercase tracking-[0.18em] text-stone">
            Menu
          </summary>
          <NavLinks className="mt-4 space-y-3 text-sm text-muted" />
        </details>
        <nav aria-label="Primary" className="hidden md:block">
          <NavLinks className="flex flex-wrap gap-x-6 gap-y-2 text-[0.72rem] uppercase tracking-[0.16em] text-muted" />
        </nav>
      </div>
    </header>
  );
}
