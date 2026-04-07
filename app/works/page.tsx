import Link from "next/link";
import type { Metadata } from "next";
import { projects, legacyProjects } from "@/data/projects";
import WorkCard from "@/components/WorkCard";

export const metadata: Metadata = {
  title: "開発実績",
  description:
    "松井慶太の開発実績一覧。Webアプリ・AIプロダクト・業務システム・レガシー現代化など。",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "2px",
};

export default function WorksPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "100px 40px 80px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Link
        href="/#works"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--accent)",
          textDecoration: "none",
          letterSpacing: "2px",
          display: "inline-block",
          marginBottom: "48px",
        }}
      >
        ← BACK
      </Link>

      <div style={{ marginBottom: "64px" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--accent)",
            letterSpacing: "3px",
            marginBottom: "16px",
          }}
        >
          ALL WORKS
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          開発実績
        </h1>
      </div>

      <section style={{ marginBottom: "80px" }}>
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--muted)",
            letterSpacing: "2px",
            marginBottom: "32px",
          }}
        >
          PROJECTS
        </h2>
        <div style={gridStyle}>
          {projects.map((p) => (
            <WorkCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section>
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--muted)",
            letterSpacing: "2px",
            marginBottom: "32px",
          }}
        >
          LEGACY CONVERSIONS
        </h2>
        <div style={gridStyle}>
          {legacyProjects.map((p) => (
            <WorkCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
