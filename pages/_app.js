import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  console.log("APP");
  return <Component {...pageProps} />;
}
