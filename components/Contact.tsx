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
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: "4px",
    padding: "12px 16px",
    color: "var(--text)",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      style={{ padding: "120px 40px", background: "var(--surface)" }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)", letterSpacing: "3px", marginBottom: "16px" }}>
            CONTACT
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: "16px" }}>
            お問い合わせ
          </h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.85 }}>
            まずはお気軽にご相談ください。ヒアリングは無料です。<br />
            通常1〜2営業日以内にご返信します。
          </p>
        </div>

        {/* 2カラム */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px", alignItems: "start" }}>
          {/* 左：連絡先情報 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "2px", marginBottom: "8px" }}>EMAIL</p>
              <a href="mailto:keita2399@gmail.com" style={{ fontSize: "14px", color: "var(--text)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>
                keita2399@gmail.com
              </a>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "2px", marginBottom: "12px" }}>30分・無料相談</p>
              <a
                href="https://calendar.app.google/S7jaFLrqfjLzBAQo8"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "4px",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                📅 カレンダーで予約する
              </a>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "2px", marginBottom: "8px" }}>LINKS</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a href="https://zenn.dev/keita2399" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "var(--muted)", textDecoration: "none" }}>
                  Zenn →
                </a>
                <a href="https://portfolio-two-orpin-45.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "var(--muted)", textDecoration: "none" }}>
                  ポートフォリオ →
                </a>
              </div>
            </div>
          </div>

          {/* 右：フォーム */}
          {status === "done" ? (
            <div style={{ border: "1px solid var(--accent)", padding: "32px", borderRadius: "4px", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", fontSize: "14px", letterSpacing: "1px" }}>
                送信しました。近日中にご連絡します。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
                  お名前
                </label>
                <input name="name" required placeholder="山田 太郎" style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")} />
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
                  メールアドレス
                </label>
                <input name="email" type="email" required placeholder="you@example.com" style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")} />
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
                  ご相談内容
                </label>
                <textarea name="message" required rows={5}
                  placeholder="作りたいものの概要、背景、予算感などをざっくりお書きください。"
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")} />
              </div>
              {status === "error" && (
                <p style={{ fontSize: "13px", color: "#e05252" }}>送信に失敗しました。時間をおいて再度お試しください。</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  padding: "14px 40px",
                  background: status === "sending" ? "var(--border)" : "var(--accent)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  alignSelf: "flex-start",
                  transition: "opacity 0.2s",
                  boxShadow: "0 4px 20px rgba(200,134,10,0.25)",
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
