/**
 * APIKEY provider catalog — enterprise-cloud family (hyperscaler & enterprise cloud platforms).
 * Pure data; merged by apikey/index.ts via spread (god-file decomposition; semantic split).
 */
const ALL_APIKEY_PROVIDERS_ENTERPRISE = {
  "cloudflare-ai": {
    id: "cloudflare-ai",
    serviceKinds: ["llm"],
    alias: "cf",
    name: "Cloudflare Workers AI",
    icon: "cloud",
    color: "#F48120",
    textIcon: "CF",
    website: "https://developers.cloudflare.com/workers-ai",
    hasFree: true,
    freeNote:
      "Free 10K Neurons/day: ~150 LLM responses, 500s Whisper audio, or ~500 FLUX.1 Schnell images at 1024x1024 (4.80 Neurons per 512x512 tile) — edge inference globally",
    authHint: "Requires API Token AND Account ID (found at dash.cloudflare.com)",
  }
};

export const APIKEY_PROVIDERS_ENTERPRISE = {
  "cloudflare-ai": ALL_APIKEY_PROVIDERS_ENTERPRISE["cloudflare-ai"],
};
