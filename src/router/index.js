// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ClientDashboard from '../pages/ClientDashboard.vue';
import MyTokens from '../pages/MyTokens.vue';
import MyProfile from '../pages/MyProfile.vue';
import BillingSubscription from '../pages/BillingSubscription.vue';
import LoginScreen from '../auth/LoginScreen.vue';
import SignUpScren from '../auth/SignUpScren.vue';
import AdminDashboard from '../admin/screens/AdminDashboard.vue';
import AdminTokenScreen from '../admin/screens/AdminTokenScreen.vue';
import AdminUsersScreen from '../admin/screens/AdminUsersScreen.vue';
import CreateNewUser from '../admin/components/CreateNewUser.vue';
import AdminUserViewScreen from '../admin/components/AdminUserViewScreen.vue';
import AdminUserEditScreen from '../admin/components/AdminUserEditScreen.vue';
import AdminClientsScreen from '../admin/screens/AdminClientsScreen.vue';
import AdminClientCreateScreen from '../admin/components/AdminClientCreateScreen.vue';
import AdminClientViewScreen from '../admin/components/AdminClientViewScreen.vue';
import AdminClientEditScreen from '../admin/components/AdminClientEditScreen.vue';
import AdminLogsScreen from '../admin/screens/AdminLogsScreen.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: ClientDashboard },
  { path: '/token', name: 'My Token', component: MyTokens },
  { path: '/profile', name: 'My Profile', component: MyProfile },
  { path: '/billing-subscription', name: 'Billing Subscription', component: BillingSubscription },
  { path: '/login', name: 'Login', component: LoginScreen },
  { path: '/signup', name: 'Signup', component: SignUpScren },
  { path: '/admin-dashboard', name: 'Admin Dashboard', component: AdminDashboard },
  { path: '/admin-users', name: 'Users', component: AdminUsersScreen },
  { path: '/admin-tokens', name: 'Tokens', component: AdminTokenScreen },
  { path: '/admin-create-user', name: 'Create User', component: CreateNewUser },
  { path: '/admin-user-view', name: 'View User', component: AdminUserViewScreen },
  { path: '/admin-user-edit', name: 'Edit User', component: AdminUserEditScreen },
  { path: '/admin-clients', name: 'Clients', component: AdminClientsScreen },
  { path: '/admin-client-create', name: 'Client Create', component: AdminClientCreateScreen },
  { path: '/admin-client-view', name: 'View Client', component: AdminClientViewScreen },
  { path: '/admin-client-edit', name: 'Edit Client', component: AdminClientEditScreen },
  { path: '/admin-logs', name: 'Logs', component: AdminLogsScreen },
]

const router = createRouter({
  history: createWebHistory(), // for normal URLs (no #)
  routes
})

export default router
