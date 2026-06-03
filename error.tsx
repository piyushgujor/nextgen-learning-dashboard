"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-500">
          Something went wrong
        </h1>

        <button
          onClick={reset}
          className="mt-4 rounded-lg bg-violet-600 px-4 py-2"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
