import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [hasJobs, setHasJobs] = useState(false);
  const [activeView, setActiveView] = useState<"chat" | "jobs">("chat");

  return (
    <Layout hasJobs={hasJobs} activeView={activeView} setActiveView={setActiveView}>
      <Component
        {...pageProps}
        setHasJobs={setHasJobs}
        setActiveView={setActiveView}
        activeView={activeView}
      />
    </Layout>
  );
}
