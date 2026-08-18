export default function SilihPageuhSubprogramLoading() {
  return (
    <main className="min-h-screen w-full animate-pulse bg-[#f6faf7]">
      <section className="bg-hijau-tua px-5 py-12 sm:px-6 md:py-14 lg:px-8">
        <div className="mx-auto flex min-h-[340px] max-w-7xl flex-col justify-end">
          <div className="h-10 w-44 rounded-lg bg-white/20" />
          <div className="mt-8 h-5 w-64 rounded bg-white/20" />
          <div className="mt-4 h-12 w-full max-w-2xl rounded bg-white/20" />
          <div className="mt-5 h-16 w-full max-w-3xl rounded bg-white/15" />
          <div className="mt-6 flex gap-3">
            <div className="h-10 w-44 rounded-lg bg-white/30" />
            <div className="h-10 w-40 rounded-lg bg-white/30" />
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_390px]">
          <div className="space-y-6">
            {Array.from({ length: 2 }, (_, index) => (
              <div
                key={index}
                className="h-48 rounded-lg border border-emerald-100 bg-white shadow-sm"
              />
            ))}
          </div>
          <div className="h-80 rounded-lg border border-emerald-100 bg-white shadow-sm" />
        </div>
      </section>
    </main>
  );
}
