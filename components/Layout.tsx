import React from "react";
import Sidebar from "./Sidebar";
import { Dispatch, SetStateAction } from "react";

export type Job = {
  id: number;
  title: string;
  status: "draft" | "quoted" | "booked";
};

type Props = {
  children: React.ReactNode;
  hasJobs: boolean;
  activeView: "chat" | "jobs" | "job";
  setActiveView: Dispatch<SetStateAction<"chat" | "jobs" | "job">>;
  jobs: Job[];
  setActiveJob: Dispatch<SetStateAction<Job | null>>;
  activeJob: Job | null;
};

export default function Layout({
  children,
  hasJobs,
  activeView,
  setActiveView,
  jobs,
  setActiveJob,
  activeJob,
}: Props) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        hasJobs={hasJobs}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <main style={{ flex: 1, padding: 24 }}>
        {activeView === "chat" && children}

        {activeView === "jobs" && (
          <div>
            <h2>Jobs</h2>

            {jobs.length === 0 && <p>No jobs yet.</p>}

            {jobs.map((job) => (
              <div
                key={job.id}
                style={{
                  padding: 12,
                  border: "1px solid #ddd",
                  marginBottom: 8,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setActiveJob(job);
                  setActiveView("job");
                }}
              >
                {job.title} — <strong>{job.status}</strong>
              </div>
            ))}
          </div>
        )}

        {activeView === "job" && activeJob && (
          <div>
            <h2>{activeJob.title}</h2>
            <p>
              Status: <strong>{activeJob.status}</strong>
            </p>
            <p>This job is currently in {activeJob.status} state.</p>
          </div>
        )}
      </main>
    </div>
  );
}
