export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6">
      <div className="grid gap-6 lg:grid-cols-4">
        {Array.from({ length: 6 }).map(
          (_, index) => (
            <div
              key={index}
              className="h-52 animate-pulse rounded-3xl bg-zinc-900"
            />
          )
        )}
      </div>
    </main>
  );
}
