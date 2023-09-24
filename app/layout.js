import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700']
});

export const metadata = {
  title: "Woodwawk",
  description: "Woodwawk landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
