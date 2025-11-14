export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    const upstream = env.JANE_API_URL
    const token = env.MENU_TOKEN
    const version = env.WORKER_VERSION

    const proxyUrl = `${upstream}${url.pathname}${url.search}`

    // Clone forward headers and add Jane headers
    const headers = new Headers(request.headers)
    headers.set("X-Jane-Token", token)
    headers.set("X-Jane-Version", version)

    // Forward client IP from Cloudflare edge
    const ip = request.headers.get("CF-Connecting-IP")
    if (ip) headers.set("X-Forwarded-For", ip)

    const proxiedRequest = new Request(proxyUrl, {
      method: request.method,
      headers,
      body: request.body,
      redirect: "manual"
    })

    return fetch(proxiedRequest)
  }
}
