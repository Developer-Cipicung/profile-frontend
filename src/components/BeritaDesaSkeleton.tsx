/**
 * Skeleton loader for BeritaDesaSection.
 * Used as the Suspense fallback on the homepage while data is being fetched.
 * Mirrors the layout of the real section to prevent layout shift (CLS).
 */
export default function BeritaDesaSkeleton() {
  return (
    <section
      aria-label="Memuat berita desa..."
      className="w-full bg-[#f6faf7] px-5 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title skeleton */}
        <div className="mx-auto h-9 w-48 animate-pulse rounded-lg bg-gray-200 md:h-10 md:w-56" />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-[0_12px_28px_rgba(22,94,51,0.08)]"
              aria-hidden="true"
            >
              {/* Image skeleton */}
              <div className="h-48 w-full animate-pulse bg-gray-200 md:h-56" />
              {/* Content skeleton */}
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200" />
                <div className="mt-2 h-5 w-3/5 animate-pulse rounded bg-gray-200" />
                <div className="mt-3 space-y-2">
                  <div className="h-4 animate-pulse rounded bg-gray-100" />
                  <div className="h-4 animate-pulse rounded bg-gray-100" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-gray-100" />
                </div>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                  <div className="h-6 w-24 animate-pulse rounded-lg bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Lihat lebih banyak" link skeleton */}
        <div className="mt-10 flex justify-center">
          <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
