/**
 * APIKEY provider catalog — specialty-media family (image / video / audio / embeddings / rerank / reader / coding tools).
 * Pure data; merged by apikey/index.ts via spread (god-file decomposition; semantic split).
 */
const ALL_APIKEY_PROVIDERS_SPECIALTY = {
  pollinations: {
    id: "pollinations",
    serviceKinds: ["llm"],
    alias: "pol",
    name: "Pollinations AI",
    icon: "local_florist",
    color: "#4CAF50",
    textIcon: "PO",
    website: "https://pollinations.ai",
    hasFree: true,
    anonymousFallback: true,
    authHint:
      "Anonymous/keyless access to the documented free models is best-effort. Local v3.8.50 verification (2026-07-31) returned 401 via OmniRoute and Cloudflare 1010 on direct upstream probes from the same network. Premium models still require a Pollinations API key from enter.pollinations.ai.",
    freeNote:
      "Free keyless tier: openai, openai-fast, openai-large, qwen-coder, mistral, deepseek, grok, gemini-flash-lite-3.1, perplexity-fast, perplexity-reasoning. Premium models (claude, gemini, midijourney) require a Pollinations API key from enter.pollinations.ai.",
  }
};

export const APIKEY_PROVIDERS_SPECIALTY = {
  "pollinations": ALL_APIKEY_PROVIDERS_SPECIALTY["pollinations"],
};
