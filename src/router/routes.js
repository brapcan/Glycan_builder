
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/sugars', component: () => import('pages/Sugars.vue') },
      { path: '/builder', component: () => import('pages/Builder.vue') },
      { path: '/test', component: () => import('pages/Test.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
