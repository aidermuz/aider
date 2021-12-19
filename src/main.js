import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
vuetify,
render: h => h(App),
router:router,
store,
created(){
    var firebaseConfig = {
        apiKey: "AIzaSyAsNE9ycAeA5xFabqsIQugLLzF4_LI2aFE",
        authDomain: "ad-pro-6890b.firebaseapp.com",
        databaseURL: "https://ad-pro-6890b-default-rtdb.firebaseio.com",
        projectId: "ad-pro-6890b",
        storageBucket: "ad-pro-6890b.appspot.com",
        messagingSenderId: "922087387846",
        appId: "1:922087387846:web:61eb6659a7072408541dc7",
        measurementId: "G-PJX8XT75BM"
};
// Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.analytics();
}

}).$mount('#app')