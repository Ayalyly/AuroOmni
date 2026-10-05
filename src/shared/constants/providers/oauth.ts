/**
 * Provider catalog data — extracted from providers.ts (god-file decomposition).
 * Pure data literal; re-exported by the providers.ts barrel. No behavior change.
 */
const ALL_OAUTH_PROVIDERS = {
  claude: {
    id: "claude",
    serviceKinds: ["llm"],
    alias: "cc",
    name: "Claude Code",
    icon: "smart_toy",
    color: "#D97757",
    subscriptionRisk: true,
    riskNoticeVariant: "oauth",
  },
  antigravity: {
    id: "antigravity",
    serviceKinds: ["llm"],
    alias: undefined,
    name: "Antigravity",
    icon: "rocket_launch",
    color: "#F59E0B",
    subscriptionRisk: true,
    riskNoticeVariant: "oauth",
  },
  codex: {
    id: "codex",
    serviceKinds: ["llm"],
    alias: "cx",
    name: "OpenAI Codex",
    icon: "code",
    color: "#3B82F6",
    subscriptionRisk: true,
    riskNoticeVariant: "oauth",
  }
};

export const OAUTH_PROVIDERS = {
  claude: ALL_OAUTH_PROVIDERS.claude,
  antigravity: ALL_OAUTH_PROVIDERS.antigravity,
  codex: ALL_OAUTH_PROVIDERS.codex,
};
