
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Navigasi utama"
      >
        {/* Logo dan nama website */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-800 text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M4 19V5M4 19h16"
                strokeLinecap="round"
              />
              <path
                d="m7 15 4-4 3 2 4-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <p className="text-base font-bold tracking-tight text-gray-900 sm:text-lg">
              Broiler <span className="text-green-800">Forecast</span>
            </p>
            <p className="text-xs text-gray-500">
              Harga Ayam Jawa Barat
            </p>
          </div>
        </Link>
      </nav>
    </header>
  );
}
