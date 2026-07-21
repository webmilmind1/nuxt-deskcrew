import type { NuxtModule } from '@nuxt/schema'

export interface DeskcrewOptions {
  /** Your DeskCrew public widget key, e.g. "pub_xxxxxxxx". Required. */
  widgetKey: string
  /** Board slug (lowercase letters, numbers and dashes). Optional. */
  board?: string
  /** Accent colour as a 6-digit hex value, e.g. "#4f46e5". Optional. */
  color?: string
  /** Which side the launcher sits on. Optional. */
  position?: 'left' | 'right'
  /** Greeting shown on the launcher. Optional. */
  greeting?: string
}

declare const module: NuxtModule<DeskcrewOptions>
export default module
