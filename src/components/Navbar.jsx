import { Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-700 shadow-[0_0_30px_rgba(168,85,247,0.6)]"></div>
          <span className="text-xl font-semibold tracking-widest text-white/90">JOB <span className="text-fuchsia-400">GURU</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#roles">Roles</a>
          <a className="hover:text-white transition-colors" href="#insights">Insights</a>
          <a className="hover:text-white transition-colors" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex neon-button">Sign In</button>
          <button className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-xl bg-white/5 backdrop-blur border border-white/10 text-white/80 hover:text-white"><Menu size={18} /></button>
          <button className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 backdrop-blur border border-white/10 text-white/80 hover:text-white"><Search size={18} /></button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-16 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-2xl" />
    </header>
  );
}
