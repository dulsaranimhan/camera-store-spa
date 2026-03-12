<script setup lang="ts">
import type { Product } from "../types/product"
import { useRouter } from "vue-router"

const router = useRouter()

const props = defineProps<{ product: Product }>()

function goToDetail() {
  router.push(`/product/${props.product.id}`)
}
</script>

<template>
  <div
    @click="goToDetail"
    class="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition cursor-pointer"
  >
    <img
      :src="props.product.thumbnail"
      class="w-full h-48 object-cover rounded-md"
    />

    <h2 class="text-lg font-semibold mt-3">
      {{ props.product.title }}
    </h2>

    <p class="text-gray-600">
      ${{ props.product.price }}
    </p>

    <p class="text-yellow-500 text-sm">
      ⭐ {{ props.product.rating }}
    </p>
  </div>
</template>