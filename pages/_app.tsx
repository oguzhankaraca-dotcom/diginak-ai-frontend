import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [hasJobs, setHasJobs] = useState(false);

  return (
    <Layout hasJobs={hasJobs}>
      <Component {...pageProps} setHasJobs={setHasJobs} />
    </Layout>
  );
}