"use client";
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "rgba(148,163,184,0.6)",
          letterSpacing: "1px",
        }}
      >
        © 2026 MATSUI KEITA
      </span>
      <div style={{ display: "flex", gap: "24px" }}>
        {[
          { label: "Zenn", href: "https://zenn.dev/keita2399" },
          { label: "Portfolio", href: "https://portfolio-two-orpin-45.vercel.app" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "rgba(148,163,184,0.6)",
              textDecoration: "none",
              letterSpacing: "1px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#93c5fd")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(148,163,184,0.6)")
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
