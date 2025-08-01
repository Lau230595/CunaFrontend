import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/about-us', name: 'AboutUs', component: () => import('@/views/about-us.vue') },
  { path: '/login', name: 'Login', component: () => import('@/views/Login.vue'), meta: { requiresGuest: true } },

  // Dashboard principal
  { path: '/dashboard', name: 'Dashboard', component: () => import('@/views/Dashboard.vue'), meta: { requiresAuth: true } },

  // Entidades principales
  { path: '/students', name: 'Students', component: () => import('@/views/Students.vue'), meta: { requiresAuth: true } },
  { path: '/teachers', name: 'Teachers', component: () => import('@/views/Teachers.vue'), meta: { requiresAuth: true } },
  { path: '/courses', name: 'CoursesView', component: () => import('@/views/Courses.vue'), meta: { requiresAuth: true } },
  { path: '/grades', name: 'GradesView', component: () => import('@/views/Grades.vue'), meta: { requiresAuth: true } },
  { path: '/attendance', name: 'AttendanceView', component: () => import('@/views/Attendance.vue'), meta: { requiresAuth: true } },
  { path: '/payments', name: 'PaymentsView', component: () => import('@/views/Payments.vue'), meta: { requiresAuth: true } },
  { path: '/announcements', name: 'AnnouncementsView', component: () => import('@/views/Announcement.vue'), meta: { requiresAuth: true } },
  { path: '/documents', name: 'DocumentsView', component: () => import('@/views/Documents.vue'), meta: { requiresAuth: true } },
  { path: '/chats', name: 'ChatsView', component: () => import('@/views/Chats.vue'), meta: { requiresAuth: true } },
  { path: '/inscriptions', name: 'InscriptionsView', component: () => import('@/views/Inscriptions.vue'), meta: { requiresAuth: true } },
  { path: '/workloads', name: 'WorkloadsView', component: () => import('@/views/Workloads.vue'), meta: { requiresAuth: true } },
  { path: '/periods', name: 'PeriodsView', component: () => import('@/views/Periods.vue'), meta: { requiresAuth: true } },

  // Perfil
  { path: '/profile', name: 'ProfileView', component: () => import('@/views/Profile.vue'), meta: { requiresAuth: true } },

  // Puedes dejar las rutas de usuario si las usas
  { path: '/calendar', name: 'CalendarView', component: () => import('@/views/user/CalendarView.vue'), meta: { requiresAuth: true } },
  { path: '/files', name: 'PrivateFilesView', component: () => import('@/views/user/PrivateFilesView.vue'), meta: { requiresAuth: true } },
  { path: '/reports', name: 'ReportsView', component: () => import('@/views/user/ReportsView.vue'), meta: { requiresAuth: true } },
  { path: '/preferences', name: 'PreferencesView', component: () => import('@/views/user/PreferencesView.vue'), meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// ⛔️ Guards de navegación
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated
  console.log('Guard: isAuthenticated =', isAuthenticated)

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (isAuthenticated) {
      next('/dashboard')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
