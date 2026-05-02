<script setup lang="ts">
import { computed } from "vue"
import ProductCard from "./ProductCard.vue"
import { useSearchStore } from "../stores/searchStore"

const searchStore = useSearchStore()

const products = [
  {
    id: 1,
    title: "Sony A7 IV",
    description: "Full-frame mirrorless camera",
    price: 430000,
    discountPercentage: 0,
    rating: 4.8,
    stock: 5,
    brand: "Sony",
    category: "Photography",
    thumbnail: "/src/assets/sony-camera.png",
    images: ["/src/assets/sony-camera.png"],
  },
  {
    id: 2,
    title: "Nikon D7500",
    description: "DSLR camera for photography",
    price: 280000,
    discountPercentage: 0,
    rating: 4.6,
    stock: 4,
    brand: "Nikon",
    category: "Photography",
    thumbnail: "/src/assets/sony-camera.png",
    images: ["/src/assets/sony-camera.png"],
  },
  {
    id: 3,
    title: "Canon R5",
    description: "Professional mirrorless camera",
    price: 310000,
    discountPercentage: 0,
    rating: 4.7,
    stock: 3,
    brand: "Canon",
    category: "Photography",
    thumbnail: "/src/assets/sony-camera.png",
    images: ["/src/assets/sony-camera.png"],
  },
  {
    id: 4,
    title: "Sony FX3",
    description: "Cinema camera for video creators",
    price: 389000,
    discountPercentage: 0,
    rating: 4.9,
    stock: 2,
    brand: "Sony",
    category: "Pro Video",
    thumbnail: "/src/assets/sony-camera.png",
    images: ["/src/assets/sony-camera.png"],
  },
]

const filteredProducts = computed(() =>
  products.filter((product) =>
    product.title.toLowerCase().includes(searchStore.keyword.toLowerCase())
  )
)
</script>

<template>
  <section class="px-10 py-14 bg-white">
    <h2 class="text-3xl font-bold mb-8">
      Featured Camera Deals
    </h2>

    <div
      v-if="filteredProducts.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <p v-else class="text-gray-500">
      No products found.
    </p>
  </section>
</template>