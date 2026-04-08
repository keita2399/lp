"use client";
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--muted)",
          letterSpacing: "1px",
        }}
      >
        © 2026 MATSUI KEITA
      </span>
      <div style={{ display: "flex", gap: "24px" }}>
        <a
          href="https://zenn.dev/keita2399"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--muted)",
            textDecoration: "none",
            letterSpacing: "1px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "var(--text)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "var(--muted)")
          }
        >
          Zenn
        </a>
        <a
          href="https://portfolio-two-orpin-45.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--muted)",
            textDecoration: "none",
            letterSpacing: "1px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "var(--text)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "var(--muted)")
          }
        >
          Portfolio
        </a>
      </div>
    </footer>
  );
}
