<!-- deskcrew-header:start -->
<p align="center">
  <a href="https://deskcrew.io"><img src="https://deskcrew.io/logo.png" alt="DeskCrew" width="96" height="96"></a>
</p>

<h1 align="center">@deskcrew/nuxt</h1>

<p align="center"><b>Nuxt module for AI live chat, help center and ticketing. Add the DeskCrew support widget to any Nuxt 3 app with one entry in nuxt.config.ts. Works with SSR and static. Free plan.</b></p>

<p align="center">
  <a href="https://deskcrew.io"><b>Website</b></a> •
  <a href="https://deskcrew.io/integrations"><b>Integrations</b></a> •
  <a href="https://deskcrew.io/agents"><b>For agents</b></a> •
  <a href="https://deskcrew.io/signup"><b>Sign up</b></a>
</p>

<p align="center">
  <a href="https://github.com/webmilmind1/nuxt-deskcrew/stargazers"><img src="https://img.shields.io/github/stars/webmilmind1/nuxt-deskcrew?style=flat&logo=github&label=Stars&color=ffd33d" alt="GitHub stars"></a>
  <a href="https://github.com/webmilmind1/nuxt-deskcrew"><img src="https://img.shields.io/github/license/webmilmind1/nuxt-deskcrew?style=flat&label=License&color=e3a82b" alt="License"></a>
</p>

<p align="center">
  <a href="https://deskcrew.io"><img src="https://img.shields.io/badge/Visit_our_website-6366F1?style=for-the-badge&logoColor=white" alt="Visit our website"></a>
  <a href="https://discord.gg/hdWZgrYDqB"><img src="https://img.shields.io/badge/Join_our_Discord-5865F2?style=for-the-badge&logoColor=white&logo=discord" alt="Join our Discord"></a>
  <a href="https://x.com/getdeskcrew"><img src="https://img.shields.io/badge/Follow_%40getdeskcrew-000000?style=for-the-badge&logoColor=white&logo=x" alt="Follow @getdeskcrew"></a>
  <a href="https://whop.com/deskcrew/"><img src="https://img.shields.io/badge/Join_us_on_Whop-FF6243?style=for-the-badge&logoColor=white" alt="Join us on Whop"></a>
</p>

<p align="center"><i>⭐ Help more people find DeskCrew. Star this repo!</i></p>
<!-- deskcrew-header:end -->

[![npm](https://img.shields.io/npm/v/@deskcrew/nuxt?color=4f46e5&label=npm)](https://www.npmjs.com/package/@deskcrew/nuxt)
[![license](https://img.shields.io/npm/l/@deskcrew/nuxt?color=4f46e5)](./LICENSE)

<a href="https://www.producthunt.com/products/deskcrew?utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-deskcrew"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1197215&theme=dark" alt="DeskCrew on Product Hunt" width="250" height="54" /></a>

**Add AI live chat, a help center and ticketing to any Nuxt app in about two minutes, free, with no credit card.** `@deskcrew/nuxt` is the official [DeskCrew](https://deskcrew.io) module: one entry in `nuxt.config.ts` puts a support widget on every page, answers visitor questions from your own help articles, and turns anything it cannot answer into a real support ticket.

[![The DeskCrew AI support widget opening on a Nuxt documentation site and answering a visitor question about server-side rendering](https://deskcrew.b-cdn.net/plugins/nuxt-demo.gif)](https://deskcrew.b-cdn.net/plugins/nuxt-demo.mp4)

<sub>The widget running on a Nuxt site. <a href="https://deskcrew.b-cdn.net/plugins/nuxt-demo.mp4">Watch the full quality video</a>.</sub>

## Install

```bash
npm install @deskcrew/nuxt
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@deskcrew/nuxt'],
  deskcrew: {
    widgetKey: 'pub_xxxxxxxx', // required, from Dashboard → Install
    // board: 'your-workspace', // optional
    // color: '#4f46e5',        // optional accent colour
    // position: 'right',       // optional: 'left' | 'right'
    // greeting: 'Hi! How can we help?', // optional
  },
})
```

Run or build your app and the chat launcher appears on every page. No account yet? [Create one free](https://deskcrew.io/signup), then copy your key from [Dashboard → Install](https://deskcrew.io/dashboard/install).

## What you get

- **AI answers grounded in your own help articles.** The assistant only answers from the knowledge base you publish, so it cannot invent product facts.
- **A human approves before anything sends.** Every AI draft waits in an approval queue. Nothing reaches a customer unreviewed.
- **Every conversation becomes a ticket.** Widget chats, emails and board posts land in one dashboard with full history.
- **Visitors who leave still get answered.** Leave an email address and the reply arrives by email.
- **Free plan, no card.** Chat widget, public knowledge base and ticketing are included on the free plan.

## Options

| Option      | Type                | Required | Description                                           |
| ----------- | ------------------- | -------- | ----------------------------------------------------- |
| `widgetKey` | `string`            | yes      | Your public key (`pub_…`).                            |
| `board`     | `string`            | no       | Board slug (lowercase letters, numbers, dashes).      |
| `color`     | `string`            | no       | Accent colour as a 6-digit hex value, e.g. `#4f46e5`. |
| `position`  | `'left' \| 'right'` | no       | Which side the launcher sits on.                      |
| `greeting`  | `string`            | no       | Greeting shown on the launcher.                       |

If `widgetKey` is missing or malformed the module prints a build-time warning and adds nothing. Your app still builds.

## How it works

The module appends a single `<script src="https://deskcrew.io/desk.js">` entry to the app head (`app.head.script`). The widget renders inside a Shadow DOM, so it cannot inherit or leak your app's CSS. `desk.js` reads your settings from its `data-*` attributes and derives its API origin from its own `src`, so there is nothing else to configure.

Nuxt compatibility: works with Nuxt 3 and later, in both SSR and static (`nuxi generate`) modes.

## How it compares

| | DeskCrew | Intercom | Crisp | Tidio |
| --- | --- | --- | --- | --- |
| Free plan with AI answers | Yes | No | Limited | Limited |
| Human approves AI replies | Yes, built in | No | No | No |
| Official Nuxt module | Yes | No | No | No |
| Public knowledge base included | Yes | Paid add-on | Paid tier | Paid tier |
| Credit card to start | No | Yes | No | No |

## FAQ

### How do I add live chat to a Nuxt app?
Install `@deskcrew/nuxt`, add it to `modules` in `nuxt.config.ts` with your public widget key, and restart. The launcher appears on every page.

### Is it free?
Yes. The free plan includes the chat widget, a public knowledge base and ticketing, with no credit card. Paid plans add higher AI allowances and team features. See [pricing](https://deskcrew.io/pricing).

### Does it work with SSR and static generation?
Both. The widget is client-side, so `nuxt build` and `nuxi generate` behave the same.

### Does it slow my app down?
The module adds one deferred script tag. Nothing renders until the visitor opens the launcher, and the widget is isolated in a Shadow DOM so it cannot affect your styles or layout.

### Does the AI make things up?
It answers from the knowledge base you publish. When it has no grounded answer it escalates to a human instead of guessing, and every draft reply requires human approval before sending.

### Can I use it on multiple sites?
Yes. Each site is its own workspace with a separate knowledge base, ticket history and widget key.

## Links

- Nuxt integration page: https://deskcrew.io/integrations/nuxt
- All integrations: https://deskcrew.io/integrations
- Pricing: https://deskcrew.io/pricing
- Start free: https://deskcrew.io/signup

## License

MIT © DeskCrew · [deskcrew.io](https://deskcrew.io) · hello@deskcrew.io

_Updated July 2026._
