import path from 'path'

export const routes = [
  {
    name: 'starting',
    path: '/starting',
    component: path.resolve(__dirname, 'pages/starting.vue'),
  },
  {
    name: 'lmsdashboard',
    path: '/lmsdashboard',
    component: path.resolve(__dirname, 'pages/dashboard.vue'),
  },
  {
    name: 'my_courses',
    path: '/my-courses',
    component: path.resolve(__dirname, 'pages/my_courses.vue'),
  },
  {
    name: 'course_landing',
    path: '/course-landing',
    component: path.resolve(__dirname, 'pages/course_landing.vue'),
  },
  {
    name: 'course_content',
    path: '/course-content',
    component: path.resolve(__dirname, 'pages/course_content.vue'),
  },
  {
    name: 'example',
    path: '/example',
    component: path.resolve(__dirname, 'pages/example.vue'),
  },
  {
    name: 'courses',
    path: '/courses',
    component: path.resolve(__dirname, 'pages/courses.vue'),
  },
]
