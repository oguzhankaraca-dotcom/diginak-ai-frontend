import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";
import type { Job } from "../types/job";
import type { View } from "../types/view";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [activeView, setActiveView] = useState<View>("chat");
  const [jobs, setJobs] = useState<Job[]>([
    { id: 1, title: "Test Job", status: "draft" },
  ]);
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  const hasJobs = jobs.length > 0;

  return (
    <Layout
      hasJobs={hasJobs}
      activeView={activeView}
      setActiveView={setActiveView}
      jobs={jobs}
      setActiveJob={setActiveJob}
      activeJob={activeJob}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
