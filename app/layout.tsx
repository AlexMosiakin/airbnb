import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ClientOnly } from "./components/ClientOnly/ClientOnly";
import { RegisterModal } from "./components/Modals/RegisterModal";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModal } from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { RentModal } from "./components/Modals/RentModal";
import { SearchModal } from "./components/Modals/SearchModal";
import Head from "next/head";
import { Footer } from "./components/Footer/Footer";

export const metadata = {
  title: "Airhome",
  description: "Airhome stay home",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={font.className}>
        <div className="flex flex-col h-full">
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <RentModal />
            <LoginModal />
            <SearchModal />
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          <div className="pb-20 pt-28">
            {children}
          </div>
          <ClientOnly>
            <Footer />
          </ClientOnly>
        </div>
      </body>
    </html>
  );
}
