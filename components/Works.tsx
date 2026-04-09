"use client";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const featured = [
  ...projects.filter((p) => p.category === "flagship"),
  ...projects.filter((p) => p.category !== "flagship" && p.thumbnail),
]
  .filter((p) => p.thumbnail)
  .slice(0, 6);

export default function Works() {
  return (
    <section
      id="works"
      style={{
        padding: "120px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
      }}
    >
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
              fontSize: "10px",
              color: "rgba(147,197,253,0.8)",
              letterSpacing: "4px",
              marginBottom: "16px",
            }}
          >
            // WORKS
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "#fff",
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
            color: "#93c5fd",
            textDecoration: "none",
            letterSpacing: "1px",
            borderBottom: "1px solid rgba(147,197,253,0.4)",
            paddingBottom: "2px",
            transition: "color 0.2s, border-color 0.2s",
          }}
        >
          すべて見る →
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
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
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                borderRadius: "4px",
                overflow: "hidden",
                transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(59,130,246,0.5)";
                el.style.boxShadow = "0 8px 32px rgba(37,99,235,0.15)";
                el.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.12)";
                el.style.boxShadow = "none";
                el.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                  background: "rgba(15,23,42,0.8)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={p.thumbnail!}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(0,0,0,0.75)",
                    backdropFilter: "blur(4px)",
                    padding: "4px 10px",
                    borderRadius: "2px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "#93c5fd",
                      letterSpacing: "1px",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
              </div>

              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flexGrow: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.4,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(148,163,184,0.85)",
                    lineHeight: 1.7,
                    flexGrow: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
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
                        color: "rgba(147,197,253,0.7)",
                        border: "1px solid rgba(59,130,246,0.25)",
                        background: "rgba(59,130,246,0.08)",
                        padding: "2px 8px",
                        borderRadius: "2px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
