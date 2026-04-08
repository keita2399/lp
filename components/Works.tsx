"use client";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

// サムネイルがある実績を優先して厳選
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
                border: "1px solid var(--border)",
                background: "var(--surface)",
                borderRadius: "4px",
                overflow: "hidden",
                transition: "border-color 0.2s, box-shadow 0.2s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent)";
                el.style.boxShadow = "0 8px 32px rgba(200,134,10,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "none";
              }}
            >
              {/* サムネイル */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                  background: "#1a1a1a",
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
                {/* バッジオーバーレイ */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(4px)",
                    padding: "4px 10px",
                    borderRadius: "2px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "#c8860a",
                      letterSpacing: "1px",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
              </div>

              {/* テキスト */}
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
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
