import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-sky-950 text-white">
      {/* Темний прозорий оверлей */}
      <div className="absolute inset-0 z-0 bg-black/30" />

      {/* Контент з анімацією появи знизу */}
      <div className="fade-up relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Welcome to Your CRM
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl">
          Manage companies, track promotions, and keep your business organized —
          all in one place.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard"
            className="rounded-xl bg-blue-600 px-6 py-3 text-white shadow-xl transition hover:bg-blue-700"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/companies"
            className="rounded-xl bg-green-600 px-6 py-3 text-white shadow-xl transition hover:bg-green-700"
          >
            Go to Companies
          </Link>
        </div>
      </div>
    </main>
  );
}
