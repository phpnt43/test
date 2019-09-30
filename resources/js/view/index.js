export default {
  'home': () => import('./backend/Home'),
  'categories': () => import('./backend/categories/Categories'),
  'products': () => import('./backend/products/Products'),


  'snake': () => import('./frontend/games/Snake/Snake.vue'),
}