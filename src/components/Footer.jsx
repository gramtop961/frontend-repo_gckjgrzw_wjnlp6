export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white/60">
        <div className="text-sm">© {new Date().getFullYear()} Job Guru. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-purple-500/10 to-transparent blur-2xl" />
    </footer>
  );
}
