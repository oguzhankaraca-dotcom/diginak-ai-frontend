import { useState } from "react";

type Message = {
  id: number;
  text: string;
};

export default function Home({
  setHasJobs,
  setActiveView,
  setJobs,
}: {
  setHasJobs: (v: boolean) => void;
  setActiveView: (v: "chat" | "jobs" | "job") => void;
  setJobs: (j: any[]) => void;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    // Chat message
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input },
    ]);

    // Fake Job creation
    setHasJobs(true);
    setJobs([
      {
        id: 1,
        title: "Job #1",
        status: "draft",
      },
    ]);

    // Go to Jobs view
    setActiveView("jobs");
    setInput("");
  }

  return (
    <div className="chat-wrapper">
      <div className="chat-card">
        <div className="chat-header">diginak.ai</div>

        <div className="chat-body">
          {messages.length === 0 && (
            <p className="hint">
              This conversation is not yet linked to a Job.
            </p>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className="chat-message">
              {msg.text}
            </div>
          ))}
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
          Phase 2F — first draft job created
        </div>
      </div>
    </div>
  );
}
