import { createWebHistory, createRouter } from 'vue-router';

import Home from './views/Home.vue';
import UserHome from './views/UserHome.vue';
import Account from './views/Account.vue';
import ShirtU from './views/ShirtPage.vue';
import TrousersU from './views/Trousers.vue';
import AccessoriesU from './views/AccessoriesPage.vue';
import DressesU from './views/DressPage.vue';
import Detail from './views/DetailProduct.vue';

import login from './views/login.vue';

import Shirt from './views/Shirt.vue';
import Trousers from './views/Trouserspage.vue';
import Accessories from './views/Accessories.vue';
import Dresses from './views/Dress.vue';



const routes = [
    { path: '/login', component: login},

    { path: '/', component: Home},
    { path: '/userhome', component: UserHome},
    { path: '/account', component: Account},
    { path: '/shirt', component: ShirtU},
    { path: '/trousers', component: TrousersU},
    { path: '/accessories', component: AccessoriesU},
    { path: '/dress', component: DressesU},
    { path: '/detail/:productid', component: Detail},

    { path: '/shirt-customer', component: Shirt},
    { path: '/trousers-customer', component: Trousers},
    { path: '/accessories-customer', component: Accessories},
    { path: '/dress-customer', component: Dresses},
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes,
});

export default router;