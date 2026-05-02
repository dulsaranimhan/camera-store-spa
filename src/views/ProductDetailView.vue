<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { products } from "../data/products"

const route = useRoute()
const router = useRouter()

const productId = route.params.id as string

const product = products.find(p => p.id === productId)

const goCheckout = () => {
  router.push(`/checkout/${productId}`)
}
</script>

<template>
  <div v-if="product" class="px-10 py-14">

    <div class="grid md:grid-cols-2 gap-10">

      <img
        :src="product.image"
        class="rounded-xl shadow-lg"
      />

      <div>

        <h1 class="text-3xl font-bold mb-4">
          {{ product.name }}
        </h1>

        <p class="text-gray-600 mb-6">
          {{ product.description }}
        </p>

        <p class="text-2xl font-semibold mb-6">
          Rs. {{ product.price.toLocaleString() }}
        </p>

        <button
          @click="goCheckout"
          class="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Buy Now
        </button>

      </div>

    </div>

  </div>

  <div v-else class="text-center py-20 text-gray-500">
    Product not found
  </div>
</template>