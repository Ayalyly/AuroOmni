/**
 * Provider catalog data — extracted from providers.ts (god-file decomposition).
 * Pure data literal; re-exported by the providers.ts barrel. No behavior change.
 */
const ALL_NOAUTH_PROVIDERS = {
  opencode: {
    id: "opencode",
    alias: "oc",
    name: "OpenCode Free",
    icon: "terminal",
    color: "#E87040",
    textIcon: "OC",
    website: "https://opencode.ai",
    noAuth: true,
    hasFree: true,
    serviceKinds: ["llm"],
    authHint:
      "No API key required — OpenCode's free tier can only be used from within OpenCode (client-contract requests).",
    freeNote:
      "No API key required — public OpenCode endpoint with Kimi, GLM, Qwen, MiMo, MiniMax models. Free tier only works from within OpenCode.",
    notice: {
      text: "OpenCode Free uses the public OpenCode endpoint (https://opencode.ai/zen/v1). No signup or API key needed. Rate limits apply. OpenCode's free tier can only be used from within OpenCode — requests that do not match the OpenCode client contract are refused with 403 FreeTierError.",
    },
  }
};

export const NOAUTH_PROVIDERS = {
  opencode: ALL_NOAUTH_PROVIDERS.opencode,
};

export const NOAUTH_PROVIDER_PROXY_SUPPORTED = new Set(["opencode"]);

export function supportsNoAuthProviderProxy(providerId: string): boolean {
  return NOAUTH_PROVIDER_PROXY_SUPPORTED.has(providerId);
}
