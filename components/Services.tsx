"use client";
const services = [
  {
    no: "01",
    title: "Webアプリ開発",
    desc: "TypeScript・Next.jsを軸にフルスタックで開発します。フロントエンドからAPIサーバー・DB設計まで一貫して担当。アイデアを最短でプロダクトに。",
    tags: ["TypeScript", "Next.js", "React", "PostgreSQL", "Vercel"],
    icon: "⌨",
  },
  {
    no: "02",
    title: "AIプロダクト開発",
    desc: "Claude API・Gemini APIを活用したチャットボット、書類チェック、業務自動化ツールを開発。既存サービスへのAI機能追加にも対応。",
    tags: ["Claude API", "Gemini API", "RAG", "ストリーミング"],
    icon: "◈",
  },
  {
    no: "03",
    title: "業務システム構築",
    desc: "Excel・紙運用などのアナログ業務をWebシステムに置き換えます。社内ツール、管理画面、ダッシュボードなど業務フローに合わせた設計。",
    tags: ["管理画面", "ダッシュボード", "LINE連携", "PDF出力"],
    icon: "▦",
  },
  {
    no: "04",
    title: "技術相談・設計",
    desc: "「何から始めればいい？」から相談可能。要件整理・技術選定・アーキテクチャ設計のみのご依頼にも対応します。",
    tags: ["要件定義", "技術選定", "アーキテクチャ", "コードレビュー"],
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
        {/* セクションヘッダー */}
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
            SERVICES
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            できること
          </h2>
        </div>

        {/* カードグリッド */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {services.map((s) => (
            <div
              key={s.no}
              style={{
                border: "1px solid var(--border)",
                borderTop: "3px solid var(--accent)",
                background: "var(--bg)",
                padding: "32px 28px",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* アイコン + 番号 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "var(--accent-dim)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "var(--accent)",
                  }}
                >
                  {s.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--border)",
                    letterSpacing: "1px",
                  }}
                >
                  {s.no}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "-0.3px",
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  flexGrow: 1,
                }}
              >
                {s.desc}
              </p>

              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--accent)",
                      background: "var(--accent-dim)",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      letterSpacing: "0.5px",
                    }}
                  >
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
