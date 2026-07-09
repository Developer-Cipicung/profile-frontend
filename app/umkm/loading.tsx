export default function UmkmLoading() {
  return (
    <main className="min-h-screen w-full animate-pulse bg-[#f8faf8] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto h-10 w-72 rounded-lg bg-gray-200" />
        <div className="mx-auto mt-4 h-5 w-full max-w-lg rounded bg-gray-200" />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="h-96 rounded-2xl border border-gray-100 bg-white shadow-sm"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
