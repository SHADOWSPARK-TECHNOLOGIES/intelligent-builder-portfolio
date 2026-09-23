import { profile } from "@/lib/profile";
import { Reveal } from "./reveal";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-active opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-status-active" />
            </span>
            {profile.status}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 font-display text-lg font-semibold text-glow-gradient sm:text-2xl">
            {profile.role}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}{" "}
            <span className="text-foreground/80">{profile.location}.</span>
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_color-mix(in_oklab,var(--color-primary)_55%,transparent)] transition-all hover:brightness-110 active:scale-[0.98]"
            >
              View Projects
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-secondary active:scale-[0.98]"
            >
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
