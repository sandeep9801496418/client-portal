// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ClientDashboard from '../pages/ClientDashboard.vue';
import MyTokens from '../pages/MyTokens.vue';
import MyProfile from '../pages/MyProfile.vue';
import BillingSubscription from '../pages/BillingSubscription.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: ClientDashboard },
  { path: '/token', name: 'My Token', component: MyTokens },
  { path: '/profile', name: 'My Profile', component: MyProfile },
  { path: '/billing-subscription', name: 'Billing Subscription', component: BillingSubscription }
]

const router = createRouter({
  history: createWebHistory(), // for normal URLs (no #)
  routes
})

export default router
