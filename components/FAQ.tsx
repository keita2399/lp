"use client";
import { useState } from "react";

const faqs = [
  {
    q: "費用の目安を教えてください。",
    a: "内容によって異なりますが、シンプルなWebアプリで数十万円、AIを組み込んだ業務システムで数十〜百万円程度が目安です。まずはヒアリングで概算をお伝えします。ヒアリングは無料です。",
  },
  {
    q: "開発期間はどのくらいですか？",
    a: "小規模なツールで2〜4週間、中規模のWebアプリで1〜2ヶ月が目安です。AIをフル活用した開発で、通常より速く進められます。建設業向けSaaSを3ヶ月で本番稼働させた実績があります。",
  },
  {
    q: "AIを使った開発とはどういう意味ですか？",
    a: "Claude Code（AIエンジニアリングツール）をペア開発者として活用し、設計・実装・テストを効率化します。開発コストを抑えながら品質を維持できます。また、Claude API・Gemini APIを組み込んだAIプロダクト自体の開発も得意としています。",
  },
  {
    q: "仕様書がない古いシステムの移行も依頼できますか？",
    a: "はい。ソースコードのみから業務ロジックを読み解き、モダンなWebシステムに移行することを専門としています。COBOL・PL/I・VB6・RPGなど13言語・44万行超の変換実績があります。",
  },
  {
    q: "途中で仕様変更はできますか？",
    a: "はい。動くものを見ながら確認・修正を繰り返すスタイルで進めるため、仕様変更に柔軟に対応できます。大幅な変更の場合は追加見積もりをご相談します。",
  },
  {
    q: "納品後のサポートはありますか？",
    a: "リリース後の修正・バグ対応・機能追加にも対応します。Spring Boot業務システムの20ヶ月保守実績があり、継続的なサポート契約も可能です。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ padding: "120px 40px", background: "var(--surface-alt)" }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)", letterSpacing: "3px", marginBottom: "16px" }}>
            FAQ
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px" }}>
            よくある質問
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "24px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--text)" }}>
                  {faq.q}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "18px", color: "var(--accent)", flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "rotate(0)", display: "inline-block" }}>
                  +
                </span>
              </button>
              {open === i && (
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.85, paddingBottom: "24px", maxWidth: "680px" }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
