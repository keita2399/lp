"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#services", label: "できること" },
  { href: "#process", label: "進め方" },
  { href: "#works", label: "実績" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 40px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(15,23,42,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          fontWeight: 700,
          color: "var(--accent-light)",
          textDecoration: "none",
          letterSpacing: "2px",
        }}
      >
        MATSUI KEITA
      </a>

      <nav style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontSize: "13px",
              color: "rgba(203,213,225,0.7)",
              textDecoration: "none",
              letterSpacing: "1px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#93c5fd")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(203,213,225,0.7)")
            }
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://www.lancers.jp/profile/keita2399"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "1px",
            padding: "6px 16px",
            background: "#2563eb",
            borderRadius: "4px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          Lancers
        </a>
      </nav>
    </header>
  );
}
