export default [
  {
    path: '/example',
    children: [
      {
        path: '1',
        name: 'example-1',
        component: () => import('@/views/Examples/Example_1.vue')
      }
    ]
  }
]