import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlay and vignette for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.25),transparent_55%)]" />
        <div className="absolute inset-0 mix-blend-screen opacity-40" style={{background:"radial-gradient(60%_40%_at_50%_120%,rgba(147,51,234,0.6)_0%,rgba(0,0,0,0)_70%)"}} />
      </div>

      {/* Soft moving smoke (CSS animated gradients) */}
      <div className="absolute inset-x-0 bottom-0 h-64 opacity-70">
        <div className="absolute -inset-x-20 bottom-0 h-[120%] animate-[float_10s_ease-in-out_infinite] bg-[radial-gradient(120%_80%_at_50%_100%,rgba(168,85,247,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[120%] animate-[float_14s_ease-in-out_infinite_reverse] bg-[radial-gradient(120%_80%_at_60%_120%,rgba(236,72,153,0.12),transparent_60%)] blur-2xl" />
      </div>

      {/* Center content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-300 via-violet-300 to-fuchsia-500 drop-shadow-[0_0_35px_rgba(168,85,247,0.65)]">
          JOB GURU
        </h1>
        <div className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Find your path in the glow — where divine intuition meets cutting-edge careers.
        </div>

        {/* Smoke trail rising from letters */}
        <div className="relative mx-auto mt-6 h-28 w-full max-w-3xl">
          <div className="absolute inset-x-10 bottom-0 h-full opacity-70 blur-2xl pointer-events-none" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(60%_160%_at_50%_100%,rgba(168,85,247,0.3),transparent_65%)] animate-[rise_8s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-[radial-gradient(50%_120%_at_45%_100%,rgba(147,51,234,0.25),transparent_60%)] animate-[rise_10s_ease-in-out_infinite_reverse]" />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="neon-button">Get Started</button>
          <button className="glass-button">Explore Roles</button>
        </div>

        {/* Glass cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Curated Matches', desc: 'AI-guided roles aligned to your dharma and skills.' },
            { title: 'Immersive Insights', desc: 'Cinematic role previews with growth trajectories.' },
            { title: 'Mentor Network', desc: 'Learn from gurus across industries and journeys.' },
          ].map((c, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-left shadow-[0_0_60px_rgba(168,85,247,0.08)]">
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-transparent" />
              <div className="relative">
                <h3 className="text-white/90 font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-white/60">{c.desc}</p>
                <button className="mt-5 text-fuchsia-300 hover:text-fuchsia-200">Learn more →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom neon glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-fuchsia-500/20 via-purple-500/10 to-transparent blur-2xl" />
    </section>
  );
}
