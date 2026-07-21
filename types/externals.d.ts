// Dev-only ambient stubs so `tsc --noEmit` can resolve the Nuxt packages
// without installing them. NOT published (excluded from "files"). In a
// consumer's project the real `@nuxt/kit` and `@nuxt/schema` types apply.
declare module '@nuxt/kit' {
  export function defineNuxtModule<T = Record<string, any>>(definition: any): any
}

declare module '@nuxt/schema' {
  export type NuxtModule<T = Record<string, any>> = (
    inlineOptions: T,
    nuxt: any,
  ) => void | false | Promise<void | false>
}
