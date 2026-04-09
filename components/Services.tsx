"use client";

const services = [
  {
    no: "01",
    title: "サービス企画・開発",
    desc: "アイデア段階から要件整理・設計・本番稼働まで一貫対応。BtoB業種特化マッチングSaaSで136人日の見積もりをAI協働開発で2週間強に短縮した実績があります。",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Playwright", "Vercel"],
    icon: "⌨",
  },
  {
    no: "02",
    title: "AIプロダクト開発",
    desc: "Claude API・Gemini APIを活用したチャットボット、書類チェック、見積もり自動生成など。手作業業務にAIを組み込み工数を大幅削減します。",
    tags: ["Claude API", "Gemini API", "RAG", "自動化"],
    icon: "◈",
  },
  {
    no: "03",
    title: "レガシーシステム現代化",
    desc: "仕様書がない状態でもソースコードから業務を読み解きモダンWebへ移行。COBOL・VB6・RPGなど13言語・44万行超の変換実績。",
    tags: ["COBOL", "VB6", "RPG", "React / Next.js"],
    icon: "▦",
  },
  {
    no: "04",
    title: "システム改善・技術相談",
    desc: "既存システムへの機能追加・改修、Spring Boot保守（20ヶ月実績）。「何から始めればいい？」という段階からの相談も歓迎します。",
    tags: ["Spring Boot", "要件定義", "技術選定", "コードレビュー"],
    icon: "◎",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 40px",
        background: "var(--surface)",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(147,197,253,0.8)", letterSpacing: "4px", marginBottom: "16px" }}>
            // SERVICES
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", color: "#fff" }}>
            できること
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {services.map((s) => (
            <div
              key={s.no}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderTop: "3px solid #3b82f6",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                padding: "32px 28px",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 8px 32px rgba(37,99,235,0.15)";
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = "rgba(59,130,246,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ width: "44px", height: "44px", background: "rgba(59,130,246,0.12)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#93c5fd" }}>
                  {s.icon}
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
                  {s.no}
                </span>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.3px", color: "#fff" }}>{s.title}</h3>
              <p style={{ color: "rgba(148,163,184,0.9)", fontSize: "13px", lineHeight: 1.85, flexGrow: 1 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {s.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#93c5fd", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", padding: "3px 10px", borderRadius: "100px", letterSpacing: "0.5px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
