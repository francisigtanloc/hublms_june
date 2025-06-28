import path from 'path'

export const routes = [
  {
    name: 'starting',
    path: '/starting',
    component: path.resolve(__dirname, 'pages/starting.vue'),
  },
  {
    name: 'courses',
    path: '/courses',
    component: path.resolve(__dirname, 'pages/courses.vue'),
  },
]
