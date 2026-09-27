import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
          Peccole Homes
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white">
            Home
          </Link>
          <Link href="/peccole-ranch" className="hover:text-gray-900 dark:hover:text-white">
            Peccole Ranch
          </Link>
          <Link href="/amenities" className="hover:text-gray-900 dark:hover:text-white">
            Amenities
          </Link>
          <Link href="/about" className="hover:text-gray-900 dark:hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white">
            Contact
          </Link>
          <Link href="/faq" className="hover:text-gray-900 dark:hover:text-white">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
