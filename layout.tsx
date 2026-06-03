import "./globals.css";

export const metadata = {
  title: "Next Gen Learning Dashboard",
  description:
    "Student Dashboard powered by Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}
