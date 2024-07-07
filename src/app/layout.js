import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "connectify",
  description: "connectify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">     
          {children}
          <Navbar/>
        </main>
      </body>
    </html>
  );
}
