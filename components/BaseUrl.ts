const FALLBACK_BASE_URL = "sanatansetu.tech";

function normalizeBaseUrl(url: string): string {
  const value = url.trim();
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    return new URL(withProtocol).origin.replace(/\/+$/, "");
  } catch {
    return FALLBACK_BASE_URL;
  }
}

const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const BASE_URL = normalizeBaseUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : FALLBACK_BASE_URL),
);

export function getBaseUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function getCanonicalUrl(path = "/"): string {
  return getBaseUrl(path);
}
