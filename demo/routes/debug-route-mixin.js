const rootDebugRoutes = []

const childDebugRoutes = []

export default function debugRouteMixin (routes, childRoutes) {
  childRoutes.push(...childDebugRoutes)
  routes.push(...rootDebugRoutes)
}
