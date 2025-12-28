export default function Home() {
  return (
    <div className="chat-wrapper">
      <div className="chat-card">
        <div className="chat-header">diginak.ai</div>

        <div className="chat-body">
          <p className="hint">
            This conversation is not yet linked to a Job. <br />
            (Job Threads will be introduced in a later phase.)
          </p>
        </div>

        <div className="chat-input">
          <input placeholder="Type your message..." />
          <button>Send</button>
        </div>

        <div className="chat-footer">
          Tip: press Enter to send. (AI replies & Job-state logic will come in
          Phase 2.)
        </div>
      </div>
    </div>
  );
}

