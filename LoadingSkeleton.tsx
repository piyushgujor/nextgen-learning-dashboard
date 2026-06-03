export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="h-6 w-1/2 rounded bg-zinc-800" />

      <div className="mt-6 h-2 w-full rounded bg-zinc-800" />

      <div className="mt-2 h-2 w-3/4 rounded bg-zinc-800" />
    </div>
  );
}
