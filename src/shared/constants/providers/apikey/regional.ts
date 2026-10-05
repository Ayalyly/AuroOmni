/**
 * APIKEY provider catalog — regional family (China + other regional providers).
 * Pure data; merged by apikey/index.ts via spread (god-file decomposition; semantic split).
 */
const ALL_APIKEY_PROVIDERS_REGIONAL = {
  longcat: {
    id: "longcat",
    serviceKinds: ["llm"],
    alias: "lc",
    name: "LongCat AI",
    icon: "auto_awesome",
    color: "#FF6B9D",
    textIcon: "LC",
    website: "https://longcat.chat/platform/docs",
    hasFree: true,
    freeNote:
      "Free: one-time 10M-token grant after account signup + KYC verification (LongCat-2.0). One-time only — not a recurring daily/monthly allowance.",
  }
};

export const APIKEY_PROVIDERS_REGIONAL = {
  "longcat": ALL_APIKEY_PROVIDERS_REGIONAL["longcat"],
};
