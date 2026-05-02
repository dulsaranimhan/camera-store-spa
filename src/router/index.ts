import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView.vue"
import CategoryView from "../views/CategoryView.vue"
import ProductDetailView from "../views/ProductDetailView.vue"
import CheckoutView from "../views/CheckoutView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/category/:name",
      name: "category",
      component: CategoryView,
    },
    {
      path: "/product/:id",
      name: "product-detail",
      component: ProductDetailView,
    },
    {
      path: "/checkout/:id",
      name: "checkout",
      component: CheckoutView,
    },
  ],
})

export default router