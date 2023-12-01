import PactOnlineHeader from "@/components/PactOnlineHeader";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import NextProgress from "next-progress";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextProgress color="#DD0000" options={{ showSpinner: false }} />
      <main className={roboto.className}>
        <PactOnlineHeader />
        <div className="mt-[64px]">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
