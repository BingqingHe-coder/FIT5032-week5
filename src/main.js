import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEWDJRsIos5i3wX17wy1TGMT6rHhMIpOU",
  authDomain: "week7-bingqing.firebaseapp.com",
  projectId: "week7-bingqing",
  storageBucket: "week7-bingqing.appspot.com",
  messagingSenderId: "661689613180",
  appId: "1:661689613180:web:c6e8d5e9ea8734716982f9"
};


 initializeApp(firebaseConfig);

