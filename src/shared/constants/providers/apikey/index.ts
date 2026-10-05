/**
 * APIKEY provider catalog barrel — Auro deployment profile.
 * Keep only the selected free providers; the upstream family catalogs remain
 * available in source for future restoration without changing provider code.
 */
import { APIKEY_PROVIDERS_ENTERPRISE } from "./enterprise-cloud";
import { APIKEY_PROVIDERS_REGIONAL } from "./regional";
import { APIKEY_PROVIDERS_SPECIALTY } from "./specialty-media";

export const APIKEY_PROVIDERS = {
  "cloudflare-ai": APIKEY_PROVIDERS_ENTERPRISE["cloudflare-ai"],
  longcat: APIKEY_PROVIDERS_REGIONAL.longcat,
  pollinations: APIKEY_PROVIDERS_SPECIALTY.pollinations,
};
