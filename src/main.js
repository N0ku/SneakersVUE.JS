import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import GridView from './components/Grid.vue'


    createApp(App).use(store).use(router).mount('#app')
    
    app.component("Header", Header);
    app.component("Home", Home);
    app.component("Footer", Footer);
    app.component("GridView", GridView)
 