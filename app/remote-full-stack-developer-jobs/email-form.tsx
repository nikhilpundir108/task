'use client';

export default function EmailForm() {
  return (
    <form
      className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-slate-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 transition"
      />
      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/30 text-sm whitespace-nowrap"
      >
        Get matched
      </button>
    </form>
  );
}
