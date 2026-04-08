import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "松井 慶太 — Webアプリ・AI開発";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fafaf8",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 左上アクセントライン */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            backgroundColor: "#c8860a",
          }}
        />

        {/* 上部：ラベル */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#c8860a",
            }}
          />
          <span
            style={{
              color: "#c8860a",
              fontSize: "18px",
              letterSpacing: "4px",
            }}
          >
            FREELANCE ENGINEER
          </span>
        </div>

        {/* 中央：メインコンテンツ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#888888", fontSize: "22px", letterSpacing: "2px" }}>
            松井 慶太
          </div>
          <div
            style={{
              color: "#111111",
              fontSize: "72px",
              fontWeight: "700",
              lineHeight: "1.15",
              letterSpacing: "-1px",
            }}
          >
            アイデアをすぐ
            <br />
            動くプロダクトに。
          </div>
        </div>

        {/* 下部：タグ */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {["TypeScript / Next.js", "React", "AI開発", "DX推進"].map((tag) => (
            <div
              key={tag}
              style={{
                border: "1px solid #dddddd",
                borderRadius: "4px",
                padding: "8px 18px",
                color: "#666666",
                fontSize: "16px",
                letterSpacing: "1px",
                backgroundColor: "#ffffff",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
