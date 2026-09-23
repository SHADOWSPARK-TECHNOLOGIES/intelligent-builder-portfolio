import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About, Skills, Projects, Focus, Principles, Contact, Footer } from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Stephen Chijioke Okoronkwo — AI Systems Architect & Founder",
      },
      {
        name: "description",
        content:
          "Portfolio of Stephen Chijioke Okoronkwo: AI systems architect, full-stack developer, and founder of ShadowSpark Technologies — building AI automation, backend platforms, and agentic systems for African businesses.",
      },
      {
        property: "og:title",
        content: "Stephen Chijioke Okoronkwo — AI Systems Architect & Founder",
      },
      {
        property: "og:description",
        content:
          "AI automation, backend platforms, and agentic systems for African businesses. Founder of ShadowSpark Technologies.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Stephen Chijioke Okoronkwo — AI Systems Architect & Founder",
      },
      {
        name: "twitter:description",
        content:
          "AI automation, backend platforms, and agentic systems for African businesses. Founder of ShadowSpark Technologies.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <div className="backdrop-grid" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Focus />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
