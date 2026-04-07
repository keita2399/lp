"use client";
import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mlgpjyzp";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

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
      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: "2px",
    padding: "12px 16px",
    color: "var(--text)",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    color: "var(--muted)",
    letterSpacing: "1px",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <section
      id="contact"
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
          CONTACT
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            marginBottom: "16px",
          }}
        >
          お問い合わせ
        </h2>
        <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.8 }}>
          まずはお気軽にご相談ください。ヒアリングは無料です。
          <br />
          通常1〜2営業日以内にご返信します。
        </p>
      </div>

      {status === "done" ? (
        <div
          style={{
            border: "1px solid var(--accent)",
            padding: "32px",
            borderRadius: "2px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent)",
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            送信しました。近日中にご連絡します。
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "600px" }}
        >
          <div>
            <label style={labelStyle}>お名前</label>
            <input
              name="name"
              required
              placeholder="山田 太郎"
              style={inputStyle}
              onFocus={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--border)")
              }
            />
          </div>
          <div>
            <label style={labelStyle}>メールアドレス</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              style={inputStyle}
              onFocus={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--border)")
              }
            />
          </div>
          <div>
            <label style={labelStyle}>ご相談内容</label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="作りたいものの概要、背景、予算感などをざっくりお書きください。"
              style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
              onFocus={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--border)")
              }
            />
          </div>
          {status === "error" && (
            <p style={{ fontSize: "13px", color: "#e05252" }}>
              送信に失敗しました。時間をおいて再度お試しください。
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "14px 40px",
              background: status === "sending" ? "var(--border)" : "var(--accent)",
              color: "#0a0a0a",
              border: "none",
              borderRadius: "2px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              cursor: status === "sending" ? "not-allowed" : "pointer",
              alignSelf: "flex-start",
              transition: "opacity 0.2s",
            }}
          >
            {status === "sending" ? "送信中..." : "送信する"}
          </button>
        </form>
      )}
    </section>
  );
}
