import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "SucessBuild LLC",
  description: "- Construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          {children}

        </Providers>
      </body>
    </html>
  );
}