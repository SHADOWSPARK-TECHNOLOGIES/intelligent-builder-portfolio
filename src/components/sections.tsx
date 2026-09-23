import { about, skills, projects, focus, principles, contacts, profile } from "@/lib/profile";
import { Reveal } from "./reveal";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      </div>
    </Reveal>
  );
}

const statusStyles: Record<string, string> = {
  Active: "text-status-active border-status-active/30 bg-status-active/10",
  "In Development": "text-status-dev border-status-dev/30 bg-status-dev/10",
  Demo: "text-status-demo border-status-demo/30 bg-status-demo/10",
};

function StatusPill({ status }: { status: string }) {
  return (
    <span
      className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyles[status] ?? "text-muted-foreground border-border bg-secondary"}`}
    >
      {status}
    </span>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About" title="Engineering at the systems level" />
        <span id="about-heading" className="sr-only">About</span>
        <div className="max-w-3xl space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 60}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Skills & Stack" title="Tools I build with" />
        <span id="skills-heading" className="sr-only">Skills and stack</span>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <li key={skill.name}>
              <Reveal delay={(i % 3) * 60}>
                <div className="h-full rounded-xl border border-border bg-card/70 p-4 transition-colors hover:border-primary/40">
                  <p className="text-sm font-semibold text-foreground">{skill.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{skill.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Featured Projects" title="What I'm building" />
        <span id="projects-heading" className="sr-only">Featured projects</span>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((project, i) => (
            <article key={project.name}>
              <Reveal delay={(i % 2) * 80} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 transition-all hover:border-primary/40 hover:shadow-[0_16px_50px_-20px_color-mix(in_oklab,var(--color-primary)_35%,transparent)]">
                  <div className="flex min-w-0 items-start justify-between gap-3">
                    <h3 className="min-w-0 font-display text-lg font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <StatusPill status={project.status} />
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary/90">{project.focus}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Focus() {
  return (
    <section id="focus" aria-labelledby="focus-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Current Focus" title="Where my attention is now" />
        <span id="focus-heading" className="sr-only">Current focus</span>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focus.map((item, i) => (
            <div key={item.title}>
              <Reveal delay={i * 70} className="h-full">
                <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card/70 p-5">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                  />
                  <p className="font-display text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section aria-labelledby="principles-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Principles" title="How I work" />
        <span id="principles-heading" className="sr-only">Working principles</span>
        <ol className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
          {principles.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={(i % 2) * 60}>
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10 font-display text-xs font-bold text-primary"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{p.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{p.detail}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PendingMark() {
  return (
    <span
      title="Link to be added"
      className="rounded-full border border-dashed border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground/70"
    >
      Link pending
    </span>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-8 sm:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-glow/15 blur-3xl"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
              <h2 id="contact-heading" className="mt-2 max-w-xl font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Let's build something that ships.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Open to conversations about AI systems, backend platforms, and product
                partnerships across Africa and beyond.
              </p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {contacts.map((c) =>
                  c.href ? (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-accent hover:text-accent-foreground"
                      >
                        {c.label}
                      </a>
                    </li>
                  ) : (
                    <li key={c.label}>
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        title={c.hint}
                        className="inline-flex cursor-not-allowed items-center gap-2.5 rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm font-semibold text-muted-foreground"
                      >
                        {c.label}
                        <PendingMark />
                      </button>
                    </li>
                  )
                )}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground/70">
                Contact links are placeholders — they'll go live as soon as the real URLs are added.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="text-xs text-muted-foreground">
          © {profile.currentYear} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/70">{profile.location}</p>
      </div>
    </footer>
  );
}
