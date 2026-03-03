<script setup lang="ts">
import { ref, onMounted } from "vue"
import api from "./services/api"
import type { Product } from "./types/product"

const products = ref<Product[]>([])

onMounted(async () => {
  const response = await api.get("/products")
  products.value = response.data.products
})
</script>

<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-center">
      Camera Store 🔥
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
      >
        <img
          :src="product.thumbnail"
          class="w-full h-40 object-cover rounded-md"
        />

        <h2 class="text-lg font-semibold mt-3">
          {{ product.title }}
        </h2>

        <p class="text-gray-600">
          ${{ product.price }}
        </p>

        <p class="text-sm text-yellow-500">
          ⭐ {{ product.rating }}
        </p>
      </div>
    </div>
  </div>
</template>