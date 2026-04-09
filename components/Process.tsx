const steps = [
  {
    step: "01",
    title: "ヒアリング",
    duration: "1〜2回・無料",
    desc: "作りたいものの概要・背景・予算感をお聞きします。オンラインで完結します。",
  },
  {
    step: "02",
    title: "要件整理・見積もり",
    duration: "数日",
    desc: "ヒアリング内容をもとに要件を整理し、スコープと費用感をご提示します。",
  },
  {
    step: "03",
    title: "設計・開発",
    duration: "数週間〜",
    desc: "AIをフル活用しながら開発を進めます。定期的に進捗を共有し、方向のずれを防ぎます。",
  },
  {
    step: "04",
    title: "確認・修正",
    duration: "随時",
    desc: "動くものを見ながら確認・修正を繰り返します。仕様変更があれば都度対応します。",
  },
  {
    step: "05",
    title: "リリース・引き渡し",
    duration: "完成後",
    desc: "Vercel等へのデプロイ、ソースコード・ドキュメントの引き渡しを行います。リリース後のサポートも対応可能。",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{
        padding: "120px 40px",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "rgba(147,197,253,0.8)",
              letterSpacing: "4px",
              marginBottom: "16px",
            }}
          >
            // PROCESS
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "#fff",
            }}
          >
            依頼から納品まで
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((s, i) => (
            <div
              key={s.step}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "32px",
                paddingBottom: "40px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid #3b82f6",
                    background: "rgba(59,130,246,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "#93c5fd",
                    flexShrink: 0,
                    letterSpacing: "1px",
                  }}
                >
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      flexGrow: 1,
                      minHeight: "40px",
                      background: "rgba(255,255,255,0.1)",
                      marginTop: "8px",
                    }}
                  />
                )}
              </div>

              <div style={{ paddingTop: "8px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "16px",
                    marginBottom: "10px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {s.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "#93c5fd",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {s.duration}
                  </span>
                </div>
                <p
                  style={{
                    color: "rgba(148,163,184,0.9)",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    maxWidth: "560px",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
