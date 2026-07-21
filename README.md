# @deskcrew/nuxt

Add the [DeskCrew](https://deskcrew.io) support widget (live chat, instant
answers from your help articles and a help center) to every page of your Nuxt
app.

## Install

```bash
npm install @deskcrew/nuxt
```

## Usage

Register the module and configure it under the `deskcrew` key in
`nuxt.config.ts`:

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

Run or build your app and the chat launcher appears on every page.

## Options

| Option      | Type                | Required | Description                                        |
| ----------- | ------------------- | -------- | -------------------------------------------------- |
| `widgetKey` | `string`            | yes      | Your public key (`pub_…`).                         |
| `board`     | `string`            | no       | Board slug (lowercase letters, numbers, dashes).   |
| `color`     | `string`            | no       | Accent colour as a 6-digit hex value, e.g. `#4f46e5`. |
| `position`  | `'left' \| 'right'` | no       | Which side the launcher sits on.                   |
| `greeting`  | `string`            | no       | Greeting shown on the launcher.                    |

If `widgetKey` is missing or malformed the module prints a build-time warning
and adds nothing, your app still builds.

## How it works

The module appends a single `<script src="https://deskcrew.io/desk.js">` entry
to the app head (`app.head.script`). `desk.js` reads your settings from its
`data-*` attributes and derives its API origin from its own `src`, so there is
nothing else to configure.

## No account yet?

[Create one free](https://deskcrew.io/signup), no card needed, then copy your
key from [Dashboard → Install](https://deskcrew.io/dashboard/install).

## License

MIT © DeskCrew · [deskcrew.io](https://deskcrew.io) · hello@deskcrew.io
