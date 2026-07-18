// Helpers for calling external REST APIs from within the Mia Flow preview
// sandbox without running into browser CORS restrictions.
//
// While a generated app is being prototyped it runs inside a Mia Flow
// preview session served at a URL like `/preview/<sessionId>/...`. The
// react-container-live server that hosts the preview exposes a session-scoped
// reverse proxy at:
//
//   /api/preview/react-container-live/api/preview/<sessionId>/external-proxy/*
//
// Any request sent to that path is forwarded server-side to whatever URL is
// set in the `X-Proxy-Target` header, so the browser only ever talks to the
// same origin and never hits the external API directly - no CORS.
//
// This only works while running inside the Mia Flow preview container. It is
// not meant for production deployments: once the app is built and deployed
// on its own, call the real API URL directly (and make sure that API allows
// your production origin via CORS).

export const getPreviewSessionId = (): string => {
  const match = window.location.pathname.match(/\/preview\/([^/]+)/)
  return match?.[1]?.replace(/\/$/, '') ?? ''
}

export const isPreviewSandbox = (): boolean => getPreviewSessionId() !== ''

export const buildExternalProxyUrl = (path: string): string => {
  const sessionId = getPreviewSessionId()
  const cleanPath = path.replace(/^\/+/, '')
  return `/api/preview/react-container-live/api/preview/${sessionId}/external-proxy/${cleanPath}`
}

/**
 * Fetch wrapper that routes the request through the Mia Flow preview proxy.
 *
 * @param targetBaseUrl - Base URL of the external API, e.g. `https://api.example.com`
 * @param path - Path (and query string) on that API, e.g. `v1/items?limit=10`
 */
export const fetchExternal = (
  targetBaseUrl: string,
  path: string,
  init: RequestInit = {}
): Promise<Response> => {
  return fetch(buildExternalProxyUrl(path), {
    ...init,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      ...init.headers,
      'X-Proxy-Target': targetBaseUrl,
    },
  })
}
