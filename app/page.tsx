export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-2xl text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Diginak.ai
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          Job-state driven freight workflow engine
        </p>

        <button className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
          Request Access
        </button>
      </div>
    </main>
  );
}
