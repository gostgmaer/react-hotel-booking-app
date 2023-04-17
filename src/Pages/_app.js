import "@/styles/globals.css";
import { SWRConfig } from "swr";
import "@/styles/styles.scss"

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
