import {ClerkProvider} from '@clerk/nextjs'
import Navbar from "@/components/navbar";
import "./globals.css";
import { Toaster } from 'sonner';

export const metadata = {
  title: "connectify",
  description: "connectify",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">     
        <Navbar/>
        <Toaster/>
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}