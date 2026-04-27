<script setup lang="ts">
import { ref, onMounted } from "vue"
import api from "../services/api"
import type { Product } from "../types/product"
import ProductCard from "./ProductCard.vue"

const products = ref<Product[]>([])

onMounted(async () => {
  const response = await api.get("/products/category/smartphones?limit=8")
  products.value = response.data.products
})
</script>

<template>
  <section class="px-10 py-14 bg-white">
    <h2 class="text-3xl font-bold mb-8">
      Featured Products
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>