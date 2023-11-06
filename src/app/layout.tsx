import "@/styles/app.scss";
import { Inter } from "next/font/google";
import Header from "@module/Header/Header";
import { Toaster } from "@/components/elements/Toaster";
import Providers from "@/components/modules/Providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`overflow-x-hidden bg-background text-white ${inter.className}`}
      >
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Header />
          <div
            className="max-w-6xl px-4 mx-auto mt-16 lg:mt-20"
            suppressHydrationWarning={true}
          >
            <main>{children}</main>
          </div>
          <Toaster />
          <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
        </Providers>
      </body>
    </html>
  );
}
