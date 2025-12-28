import { useState } from "react";
import Layout from "../components/Layout";

export type Job = {
  id: number;
  title: string;
  status: "draft" | "quoted" | "booked";
};

type View = "chat" | "jobs" | "job";

export default function Home() {
  const [input, setInput] = useState("");
  const [activeView, setActiveView] = useState<View>("chat");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  function sendMessage() {
    if (!input.trim()) return;

    // İlk mesajda fake job oluştur
    if (jobs.length === 0) {
      const newJob: Job = {
        id: 1,
        title: "Job #1",
        status: "draft",
      };

      setJobs([newJob]);
      setActiveJob(newJob);
      setActiveView("jobs");
    }

    setInput("");
  }

  return (
    <Layout
      hasJobs={jobs.length > 0}
      activeView={activeView}
      setActiveView={setActiveView}
      jobs={jobs}
      activeJob={activeJob}
      setActiveJob={setActiveJob}
    >
      <div className="chat-wrapper">
        <div className="chat-card">
          <div className="chat-header">diginak.ai</div>

          <div className="chat-body">
            {jobs.length === 0 && (
              <p className="hint">
                This conversation is not yet linked to a Job.
              </p>
            )}
          </div>

          <div className="chat-input">
            <input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button onClick={sendMessage}>Send</button>
          </div>

          <div className="chat-footer">
            Phase 2 — job-driven UI
          </div>
        </div>
      </div>
    </Layout>
  );
}
