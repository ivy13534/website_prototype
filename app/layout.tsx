import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google"; // Tambah Orbitron
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// Setup font Orbitron
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: '--font-orbitron',
  weight: ['400', '700', '900'] 
});

export const metadata: Metadata = {
  title: "Portofolio | Wuthering Theme",
  description: "Dibuat dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Masukkan variabel font ke body */}
      <body className={`${inter.className} ${orbitron.variable}`}>{children}</body>
    </html>
  );
}