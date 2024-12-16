import "./globals.css";

export const metadata = {
  title: "Analytics Dashboard",
  description: "Interactive dashboard for analytics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  );
}
