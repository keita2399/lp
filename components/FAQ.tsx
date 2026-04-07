"use client";
import { useState } from "react";

const faqs = [
  {
    q: "費用はどのくらいかかりますか？",
    a: "内容によって大きく異なります。シンプルなWebアプリで数十万円、AIを組み込んだシステムで数十〜百万円程度が目安です。まずはヒアリングで概算をお伝えします。",
  },
  {
    q: "開発期間はどのくらいですか？",
    a: "小規模なツールであれば2〜4週間、中規模のWebアプリで1〜2ヶ月が目安です。AIをフル活用した開発で、一般的なエンジニアより速く進められます。",
  },
  {
    q: "AIを使った開発とはどういうことですか？",
    a: "Claude Code（AIエンジニアリングツール）をペア開発者として活用し、設計・実装・テストを効率化します。AI活用によって開発コストを抑えながら、品質を維持します。",
  },
  {
    q: "途中で仕様変更はできますか？",
    a: "はい。アジャイルに近いスタイルで進めるため、動くものを見ながら仕様を調整できます。大幅な変更の場合は追加見積もりをご相談します。",
  },
  {
    q: "個人でも依頼できますか？",
    a: "もちろんです。個人・スタートアップ・中小企業など規模を問わずお受けしています。",
  },
  {
    q: "納品後のサポートはありますか？",
    a: "リリース後の軽微な修正・バグ対応・機能追加にも対応します。継続的なサポート契約も可能です。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        padding: "120px 40px",
        background: "var(--surface)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            FAQ
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            よくある質問
          </h2>
        </div>

        {/* アコーディオン */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid var(--border)" }}
            >
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
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "18px",
                    color: "var(--accent)",
                    flexShrink: 0,
                    transition: "transform 0.2s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    paddingBottom: "24px",
                    maxWidth: "680px",
                  }}
                >
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
