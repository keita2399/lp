const BASE_URL = "https://lp-one-pearl.vercel.app";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "松井 慶太",
    alternateName: "Keita Matsui",
    jobTitle: "フリーランスエンジニア",
    description:
      "TypeScript・Next.js・AIを軸にWebアプリ・業務システム・AIプロダクトを開発するフリーランスエンジニア。40年の経験をベースにAI活用によるDX推進を支援する。",
    url: BASE_URL,
    sameAs: [
      "https://zenn.dev/keita2399",
      "https://portfolio-two-orpin-45.vercel.app",
    ],
    knowsAbout: [
      "TypeScript",
      "Next.js",
      "React",
      "AI開発",
      "Claude API",
      "Gemini API",
      "DX推進",
      "業務システム開発",
      "Webアプリ開発",
      "COBOL",
      "レガシーシステム現代化",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "フリーランスエンジニア",
      occupationLocation: { "@type": "Country", name: "日本" },
      skills: "TypeScript, Next.js, React, AI開発, Claude API, Gemini API",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "松井 慶太 — Webアプリ・AI開発",
    url: BASE_URL,
    description:
      "アイデアをすぐ動くプロダクトに。TypeScript・Next.js・AIを軸に開発するフリーランスエンジニア松井慶太のサービスサイト。",
    author: { "@type": "Person", name: "松井 慶太" },
    inLanguage: "ja",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "費用はどのくらいかかりますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "内容によって大きく異なります。シンプルなWebアプリで数十万円、AIを組み込んだシステムで数十〜百万円程度が目安です。まずはヒアリングで概算をお伝えします。",
        },
      },
      {
        "@type": "Question",
        name: "開発期間はどのくらいですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "小規模なツールであれば2〜4週間、中規模のWebアプリで1〜2ヶ月が目安です。AIをフル活用した開発で、一般的なエンジニアより速く進められます。",
        },
      },
      {
        "@type": "Question",
        name: "AIを使った開発とはどういうことですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Claude Code（AIエンジニアリングツール）をペア開発者として活用し、設計・実装・テストを効率化します。AI活用によって開発コストを抑えながら、品質を維持します。",
        },
      },
      {
        "@type": "Question",
        name: "個人でも依頼できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "もちろんです。個人・スタートアップ・中小企業など規模を問わずお受けしています。",
        },
      },
      {
        "@type": "Question",
        name: "途中で仕様変更はできますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい。アジャイルに近いスタイルで進めるため、動くものを見ながら仕様を調整できます。大幅な変更の場合は追加見積もりをご相談します。",
        },
      },
      {
        "@type": "Question",
        name: "納品後のサポートはありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "リリース後の軽微な修正・バグ対応・機能追加にも対応します。継続的なサポート契約も可能です。",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
