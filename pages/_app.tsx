import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";

export type Job = {
  id: number;
  title: string;
  status: "draft";
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const [hasJobs, setHasJobs] = useState(false);
  const [activeView, setActiveView] = useState<"chat" | "jobs" | "job">("chat");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  return (
    <Layout
      hasJobs={hasJobs}
      activeView={activeView}
      setActiveView={setActiveView}
      jobs={jobs}
      setActiveJob={setActiveJob}
      activeJob={activeJob}
    >
      <Component
        {...pageProps}
        setHasJobs={setHasJobs}
        setActiveView={setActiveView}
        setJobs={setJobs}
        jobs={jobs}
      />
    </Layout>
  );
}
