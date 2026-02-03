/**
 * API client factory used by src/api/apiClient.js
 *
 */
export function createApiClient({ appId, requiresAuth = false } = {}) {
  if (!appId) {
    throw new Error("createApiClient: appId is required");
  }

  // Basic fetch wrapper. Extend as needed.
  async function request(path, { method = "GET", headers = {}, body } = {}) {
    // If you have a real base URL, set it via VITE_API_BASE_URL
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
    const url = `${baseUrl}${path}`;

    const finalHeaders = {
      "Content-Type": "application/json",
      ...headers,
    };

    // If auth is required, we look for a token in VITE_AUTH_TOKEN (dev only) or localStorage.
    if (requiresAuth) {
      const token =
        import.meta.env.VITE_AUTH_TOKEN ||
        (typeof window !== "undefined" ? window.localStorage.getItem("auth_token") : null);

      if (token) {
        finalHeaders.Authorization = `Bearer ${token}`;
      }
    }

    const res = await fetch(url, {
      method,
      headers: finalHeaders,
      body: body ? JSON.stringify(body) : undefined,
    });

    // Try to parse JSON responses; fall back to text.
    const contentType = res.headers.get("content-type") || "";
    const data = contentType.includes("application/json") ? await res.json() : await res.text();

    if (!res.ok) {
      const message = typeof data === "string" ? data : (data?.message || "Request failed");
      throw new Error(`API error (${res.status}): ${message}`);
    }

    return data;
  }

  // Expose a small interface; adjust to match your real usage.
  return {
    appId,
    requiresAuth,
    request,
  };
}
