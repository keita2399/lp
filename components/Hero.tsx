"use client";

export default function Hero() {
  return (
    <section
      className="bg-grid"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* グラデーションマスク */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,134,10,0.06) 0%, transparent 70%), linear-gradient(to bottom, transparent 60%, var(--bg) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "140px 40px 100px",
          maxWidth: "960px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* ラベル */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            padding: "6px 14px",
            borderRadius: "100px",
            marginBottom: "48px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--muted)",
              letterSpacing: "2px",
            }}
          >
            FREELANCE ENGINEER
          </span>
        </div>

        {/* メインコピー */}
        <h1
          style={{
            fontSize: "clamp(36px, 6.5vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            marginBottom: "32px",
          }}
        >
          やりたいことを伝えるだけで、
          <br />
          <span style={{ color: "var(--accent)", position: "relative", display: "inline-block" }}>
            動くシステム
            <svg viewBox="0 0 200 12" style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%", height: "10px" }} preserveAspectRatio="none">
              <path d="M0,8 Q50,2 100,7 Q150,12 200,6" fill="none" stroke="rgba(200,134,10,0.4)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          が手に入る。
        </h1>

        {/* サブコピー */}
        <p
          style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "var(--muted)",
            maxWidth: "560px",
            lineHeight: 1.9,
            marginBottom: "16px",
          }}
        >
          40年の業務システム経験 × AI協働開発。
          <br />
          企画から運用まで、一人でチーム規模の成果を出します。
        </p>

        {/* 実績バッジ */}
        <div style={{ display: "flex", gap: "24px", marginBottom: "48px", flexWrap: "wrap" }}>
          {[
            { num: "40年", label: "開発経験" },
            { num: "13言語", label: "レガシー対応" },
            { num: "44万行+", label: "変換実績" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "20px", fontWeight: 700, color: "var(--accent)", letterSpacing: "-0.5px" }}>
                {stat.num}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "1px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "72px" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 32px",
              background: "var(--accent)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
              borderRadius: "4px",
              boxShadow: "0 4px 20px rgba(200,134,10,0.3)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            まずは相談する（無料）
          </a>
          <a
            href="#works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 32px",
              background: "var(--surface)",
              color: "var(--text)",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              borderRadius: "4px",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
          >
            実績を見る
          </a>
        </div>

        {/* スタックバー */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "28px", display: "flex", alignItems: "center", flexWrap: "wrap", rowGap: "12px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "2px", marginRight: "24px", flexShrink: 0 }}>
            TECH STACK
          </span>
          {["TypeScript", "Next.js", "React", "PostgreSQL", "Claude API", "Gemini API", "Vercel", "AWS"].map((tech, i) => (
            <span key={tech} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)", padding: "0 16px", borderRight: i < 7 ? "1px solid var(--border)" : "none", whiteSpace: "nowrap" }}>
                {tech}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
