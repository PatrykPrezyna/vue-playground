import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)


app.use(VNetworkGraph)
app.use(createPinia())
app.use(router)

app.mount('#app')
