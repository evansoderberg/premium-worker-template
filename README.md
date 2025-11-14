# Jane Premium Menu Worker (Cloudflare)

This Cloudflare Worker securely proxies traffic to Jane Premium’s Menu API, forwarding
client IPs and adding required authentication headers.

## 🚀 Deploy to Cloudflare

Click below to install instantly:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/evansoderberg/premium-worker-template)

## 📦 Environment Variables

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `JANE_API_URL` | select | yes | Choose the Jane API URL from the dropdown |
| `WORKER_VERSION` | var | no | Build/version stamp |
| `MENU_TOKEN` | secret | yes | Your Jane Menu Token |

**Important:** The Menu Token is a secret. Add it manually:

Cloudflare Dashboard → Workers → jane-premium-worker → Settings → Variables & Secrets → Add Secret.

## 🧩 Worker Features

- Reverse proxy to Jane Premium API
- Secure token handling
- IP forwarding (`X-Forwarded-For`)
- Version stamping
- No CLI required for clients
