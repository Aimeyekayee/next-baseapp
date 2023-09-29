import Navigation from "@/components/navigation";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_Thai({ subsets: ["thai"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
