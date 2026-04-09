"use client";
import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mlgpjyzp";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("done"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "4px",
    padding: "12px 16px",
    color: "rgba(203,213,225,0.95)",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      style={{ padding: "120px 40px", background: "rgba(255,255,255,0.03)" }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(147,197,253,0.8)", letterSpacing: "4px", marginBottom: "16px" }}>
            // CONTACT
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: "16px", color: "#fff" }}>
            お問い合わせ
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(148,163,184,0.9)", lineHeight: 1.85 }}>
            まずはお気軽にご相談ください。ヒアリングは無料です。<br />
            通常1〜2営業日以内にご返信します。
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px", alignItems: "start" }}>
          {/* 左：連絡先情報 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(147,197,253,0.6)", letterSpacing: "2px", marginBottom: "8px" }}>EMAIL</p>
              <a href="mailto:keita2399@gmail.com" style={{ fontSize: "14px", color: "rgba(203,213,225,0.9)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                keita2399@gmail.com
              </a>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(147,197,253,0.6)", letterSpacing: "2px", marginBottom: "12px" }}>30分・無料相談</p>
              <a
                href="https://calendar.app.google/S7jaFLrqfjLzBAQo8"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  border: "1px solid rgba(59,130,246,0.5)",
                  color: "#93c5fd",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "4px",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.5)";
                }}
              >
                📅 カレンダーで予約する
              </a>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(147,197,253,0.6)", letterSpacing: "2px", marginBottom: "8px" }}>LINKS</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a href="https://zenn.dev/keita2399" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(148,163,184,0.8)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(148,163,184,0.8)")}>
                  Zenn →
                </a>
                <a href="https://portfolio-two-orpin-45.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(148,163,184,0.8)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(148,163,184,0.8)")}>
                  ポートフォリオ →
                </a>
              </div>
            </div>
          </div>

          {/* 右：フォーム */}
          {status === "done" ? (
            <div style={{ border: "1px solid rgba(59,130,246,0.4)", background: "rgba(59,130,246,0.08)", padding: "32px", borderRadius: "4px", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-mono)", color: "#93c5fd", fontSize: "14px", letterSpacing: "1px" }}>
                送信しました。近日中にご連絡します。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(147,197,253,0.6)", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
                  お名前
                </label>
                <input name="name" required placeholder="山田 太郎" style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#3b82f6")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)")} />
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(147,197,253,0.6)", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
                  メールアドレス
                </label>
                <input name="email" type="email" required placeholder="you@example.com" style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#3b82f6")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)")} />
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(147,197,253,0.6)", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
                  ご相談内容
                </label>
                <textarea name="message" required rows={5}
                  placeholder="作りたいものの概要、背景、予算感などをざっくりお書きください。"
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#3b82f6")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)")} />
              </div>
              {status === "error" && (
                <p style={{ fontSize: "13px", color: "#f87171" }}>送信に失敗しました。時間をおいて再度お試しください。</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  padding: "14px 40px",
                  background: status === "sending" ? "rgba(255,255,255,0.1)" : "#2563eb",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  alignSelf: "flex-start",
                  transition: "opacity 0.2s",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
                }}
              >
                {status === "sending" ? "送信中..." : "送信する"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
