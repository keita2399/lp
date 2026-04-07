"use client";
import Link from "next/link";
import { projects } from "@/data/projects";

// LP向けに厳選（flagshipカテゴリ優先、上位6件）
const featured = projects.filter((p) => p.category === "flagship").slice(0, 6);

export default function Works() {
  return (
    <section
      id="works"
      style={{
        padding: "120px 40px",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* セクションヘッダー */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "64px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--accent)",
              letterSpacing: "3px",
              marginBottom: "16px",
            }}
          >
            WORKS
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            開発実績
          </h2>
        </div>
        <Link
          href="/works"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--accent)",
            textDecoration: "none",
            letterSpacing: "1px",
            borderBottom: "1px solid var(--accent)",
            paddingBottom: "2px",
          }}
        >
          すべて見る →
        </Link>
      </div>

      {/* カードグリッド */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "2px",
        }}
      >
        {featured.map((p) => (
          <Link
            key={p.slug}
            href={`/works/${p.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                border: "1px solid var(--border)",
                padding: "28px",
                background: "var(--surface)",
                transition: "border-color 0.2s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)")
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
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text)",
                  lineHeight: 1.4,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  flexGrow: 1,
                }}
              >
                {p.description}
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {p.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                      padding: "2px 8px",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
