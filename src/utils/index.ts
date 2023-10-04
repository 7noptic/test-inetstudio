export const getImageUrl = (name: string) => new URL(`/src/assets/${name}`, import.meta.url).href
