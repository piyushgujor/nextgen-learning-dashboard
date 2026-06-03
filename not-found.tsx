import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p className="mt-4 text-zinc-400">
        Page not found
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-violet-600 px-4 py-2"
      >
        Go Home
      </Link>
    </main>
  );
}
