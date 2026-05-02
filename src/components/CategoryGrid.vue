<script setup lang="ts">
import { computed } from "vue"
import { products } from "../data/products"
import { useSearchStore } from "../stores/searchStore"

const searchStore = useSearchStore()

const hotDeals = computed(() => {
  return products
    .filter((product) =>
      product.name.toLowerCase().includes(searchStore.keyword.toLowerCase())
    )
    .slice(0, 4)
})
</script>

<template>
  <section class="px-10 py-14 bg-white">
    <h2 id="hot-deals" class="text-3xl font-bold mb-8">
      Hot Deals
    </h2>

    <div
      v-if="hotDeals.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
    >
      <router-link
        v-for="product in hotDeals"
        :key="product.id"
        :to="`/product/${product.id}`"
        class="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition cursor-pointer"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-48 object-contain rounded-md bg-gray-100"
        />

        <h2 class="text-lg font-semibold mt-3">
          {{ product.name }}
        </h2>

        <p class="text-red-600 font-bold">
          Rs. {{ product.price.toLocaleString() }}
        </p>
      </router-link>
    </div>

    <p v-else class="text-gray-500">
      No products found.
    </p>
  </section>
</template>