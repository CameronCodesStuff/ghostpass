# PATCHED on new chrome versions.







# 👻 GHOSTPASS

> **chrome extension bypass via payment request api**

![mid bypass](https://img.shields.io/badge/bypass-mid-orange) ![chrome only](https://img.shields.io/badge/browser-chrome%20only-blue) ![poc](https://img.shields.io/badge/type-poc-lightgrey) ![3 min sessions](https://img.shields.io/badge/session-3%20min-red)

---

## How it works

Browsers have an obscure feature called the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API) — normally used by sites to process transactions. It opens a small popup window to handle payments, and that window happens to confuse the content filtering logic in certain extensions.

---

## What to expect

| | |
|---|---|
| ✅ | Pages won't appear in your browsing history — cookies are saved normally |
| ✅ | Right-click inside the window to go back and forward |
| ❌ | Bypass lasts **3 minutes** per session |
| ❌ | Text size can't be adjusted inside the window |
| ❌ | Won't work against network-level filters (firewalls, DNS blocking) |
| ❌ | Can't sign into personal accounts inside the window |
| ⚠️ | Some advanced filters may still read and block traffic inside the window |

---

*based on [buypass](https://github.com/bypassiwastaken/buypass) by bypassi · chrome only · poc*
