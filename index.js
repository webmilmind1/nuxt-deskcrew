import { defineNuxtModule } from '@nuxt/kit'
import { buildAttrs } from './build-tag.js'

/**
 * DeskCrew Nuxt module.
 *
 * Adds the DeskCrew support widget (live chat, instant answers and a help
 * centre) to every page. It appends one `<script src="…/desk.js">` entry to the
 * app head; desk.js reads its `data-*` attributes and derives its API origin
 * from its own src.
 *
 * Configure it under the `deskcrew` key in nuxt.config:
 *
 *   export default defineNuxtConfig({
 *     modules: ['@deskcrew/nuxt'],
 *     deskcrew: { widgetKey: 'pub_xxxxxxxx' },
 *   })
 */
export default defineNuxtModule({
  meta: {
    name: '@deskcrew/nuxt',
    configKey: 'deskcrew',
    compatibility: { nuxt: '>=3.0.0' },
  },
  defaults: {},
  setup(options, nuxt) {
    const { attrs, warnings } = buildAttrs(options)
    for (const message of warnings) console.warn(message)
    if (!attrs) return

    /** @type {Record<string, string | boolean>} */
    const script = { defer: true }
    for (const [name, value] of attrs) script[name] = value

    nuxt.options.app = nuxt.options.app || {}
    nuxt.options.app.head = nuxt.options.app.head || {}
    nuxt.options.app.head.script = nuxt.options.app.head.script || []
    nuxt.options.app.head.script.push(script)
  },
})
