const services = [
  {
    no: "01",
    title: "Webアプリ開発",
    desc: "TypeScript・Next.jsを軸にフルスタックで開発します。フロントエンドからAPIサーバー・DB設計まで一貫して担当。アイデアを最短でプロダクトに。",
    tags: ["TypeScript", "Next.js", "React", "PostgreSQL", "Vercel"],
  },
  {
    no: "02",
    title: "AIプロダクト開発",
    desc: "Claude API・Gemini APIを活用したチャットボット、書類チェック、業務自動化ツールを開発。既存サービスへのAI機能追加にも対応。",
    tags: ["Claude API", "Gemini API", "RAG", "ストリーミング"],
  },
  {
    no: "03",
    title: "業務システム構築",
    desc: "Excel・紙運用などのアナログ業務をWebシステムに置き換えます。社内ツール、管理画面、ダッシュボードなど業務フローに合わせた設計。",
    tags: ["管理画面", "ダッシュボード", "LINE連携", "PDF出力"],
  },
  {
    no: "04",
    title: "技術相談・設計",
    desc: "「何から始めればいい？」から相談可能。要件整理・技術選定・アーキテクチャ設計のみのご依頼にも対応します。",
    tags: ["要件定義", "技術選定", "アーキテクチャ", "コードレビュー"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 40px",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}
    >
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
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          できること
        </h2>
      </div>

      {/* サービスリスト */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {services.map((s) => (
          <div
            key={s.no}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              gap: "32px",
              padding: "40px 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {/* 番号 */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--accent)",
                paddingTop: "4px",
                letterSpacing: "1px",
              }}
            >
              {s.no}
            </div>

            {/* コンテンツ */}
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  letterSpacing: "-0.3px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                  maxWidth: "580px",
                }}
              >
                {s.desc}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                      padding: "3px 10px",
                      borderRadius: "2px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
