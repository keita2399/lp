"use client";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function WorkCard({ project }: { project: Project }) {
  const p = project;
  return (
    <Link href={`/works/${p.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          border: "1px solid var(--border)",
          padding: "24px",
          background: "var(--surface)",
          transition: "border-color 0.2s",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "100%",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
        }
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--accent)",
            letterSpacing: "1px",
          }}
        >
          {p.badge}
        </span>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--text)",
            lineHeight: 1.4,
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: "var(--muted)",
            lineHeight: 1.7,
            flexGrow: 1,
          }}
        >
          {p.description}
        </p>
      </div>
    </Link>
  );
}
