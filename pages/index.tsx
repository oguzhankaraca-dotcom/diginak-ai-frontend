// pages/index.tsx
import React, { useMemo, useRef, useState } from "react";
import { TopBar } from "../components/TopBar";

type ChatMessage = {
  id: string;
  role: "user" | "system";
  text: string;
};

export default function HomePage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "sys-1",
      role: "system",
      text: "This conversation is not yet linked to a Job.\n(We’ll introduce Job Threads next.)",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  function scrollToBottom() {
    // small delay so DOM updates first
    setTimeout(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }, 50);
  }

  function onSend() {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: "user", text },
    ]);
    setInput("");
    scrollToBottom();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") onSend();
  }

  return (
    <div className="container">
      <TopBar />

      <div className="main">
        <div className="chatWrap">
          <div className="notice">
            <strong>Live test environment.</strong> You may encounter incomplete features or unexpected behavior.
            <br />
            We’re iterating quickly — thanks for your patience.
          </div>

          <div className="panel">
            <div className="messages" ref={listRef}>
              {messages.length === 0 ? (
                <div className="emptyState">
                  <div className="title">Diginak.ai</div>
                  <div className="subtitle">
                    Job-state driven freight workflow engine — chat is the interface, Job Threads are the source of truth.
                  </div>
                  <div className="hint">Type a message below to start.</div>
                </div>
              ) : (
                messages.map((m) => (
                  <div
                    key={m.id}
                    className={`msgRow ${m.role === "user" ? "user" : "system"}`}
                  >
                    <div className={`bubble ${m.role === "user" ? "user" : ""}`}>
                      {m.text}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="composer">
              <input
                className="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type your message…"
              />
              <button className="sendBtn" onClick={onSend} disabled={!canSend}>
                Send
              </button>
            </div>
          </div>

          <div className="hint">
            Tip: press <strong>Enter</strong> to send. (AI replies & Job-state logic will come in Phase 2.)
          </div>
        </div>
      </div>
    </div>
  );
}
