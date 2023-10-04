/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { getImageUrl } from '@/utils'

const app = createApp(App)

app.config.globalProperties.$getImageUrl = getImageUrl

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $getImageUrl: typeof getImageUrl
  }
}

registerPlugins(app)

app.mount('#app')
