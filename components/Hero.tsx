"use client";
export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 40px 80px",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* ラベル */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "40px",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--accent)",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--accent)",
            letterSpacing: "3px",
          }}
        >
          FREELANCE ENGINEER
        </span>
      </div>

      {/* メインコピー */}
      <h1
        style={{
          fontSize: "clamp(36px, 6vw, 72px)",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-1px",
          marginBottom: "32px",
        }}
      >
        アイデアを
        <br />
        すぐ動くプロダクトに。
      </h1>

      {/* サブコピー */}
      <p
        style={{
          fontSize: "clamp(15px, 1.8vw, 18px)",
          color: "var(--muted)",
          maxWidth: "560px",
          lineHeight: 1.8,
          marginBottom: "56px",
        }}
      >
        TypeScript・Next.js・AIを軸に、Webアプリ・業務システム・AIプロダクトを
        設計から開発・リリースまで一貫して担います。
        <br />
        AIをフル活用した開発で、スピードとコストを両立します。
      </p>

      {/* CTA */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            padding: "14px 36px",
            background: "var(--accent)",
            color: "#0a0a0a",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "1px",
            textDecoration: "none",
            borderRadius: "2px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.85")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          お問い合わせ
        </a>
        <a
          href="#works"
          style={{
            display: "inline-block",
            padding: "14px 36px",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            letterSpacing: "1px",
            textDecoration: "none",
            borderRadius: "2px",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--accent)";
            el.style.color = "var(--text)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--border)";
            el.style.color = "var(--muted)";
          }}
        >
          実績を見る
        </a>
      </div>

      {/* スタック表示 */}
      <div
        style={{
          marginTop: "80px",
          paddingTop: "40px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {[
          "TypeScript",
          "Next.js",
          "React",
          "PostgreSQL",
          "Claude API",
          "Gemini API",
          "Vercel",
          "AWS",
        ].map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--muted)",
              letterSpacing: "1px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
