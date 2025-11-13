import { Public_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Header } from "@/components/header/header";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans", // 🔥 defines the variable globally
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
