import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

import { ReactLenis } from "../lib/lenis/lenis";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Richard Kortey - Web Developer",
  description: "Web Developer Portfolio showcasing projects and skills",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <ReactLenis root>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
