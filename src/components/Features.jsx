import { Sparkles, Shield, Zap } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <Sparkles className="text-fuchsia-400" size={20} />,
      title: "Neon Precision",
      desc: "Hyper-focused search that glows with the roles you’re meant to see.",
    },
    {
      icon: <Shield className="text-purple-300" size={20} />,
      title: "Trust & Clarity",
      desc: "Glassmorphism UI that reveals what matters with calm transparency.",
    },
    {
      icon: <Zap className="text-fuchsia-300" size={20} />,
      title: "Faster Decisions",
      desc: "Cinematic previews and crisp comparisons to act with confidence.",
    },
  ];

  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-72 w-[60%] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(168,85,247,0.18),transparent_70%)] blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(168,85,247,0.05)]">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                {it.icon}
              </div>
              <h4 className="mt-4 text-white/90 font-semibold">{it.title}</h4>
              <p className="mt-2 text-white/60">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
