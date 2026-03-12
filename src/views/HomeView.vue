<script setup lang="ts">
import { ref, onMounted } from "vue"
import api from "../services/api"
import type { Product } from "../types/product"
import ProductCard from "../components/ProductCard.vue"

const products = ref<Product[]>([])

onMounted(async () => {
  const response = await api.get("/products/category/smartphones")
  products.value = response.data.products
})
</script>

<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-center">
      Camera Store 🔥
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard
  v-for="product in products"
  :key="product.id"
  :product="product"
/>
    </div>
  </div>
</template>