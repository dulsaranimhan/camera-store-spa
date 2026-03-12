<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import api from "../services/api"

const route = useRoute()

const product = ref<any>(null)
const loading = ref(true)

onMounted(async () => {
  const id = route.params.id
  const response = await api.get(`/products/${id}`)
  product.value = response.data
  loading.value = false
})
</script>

<template>
  <div class="p-10">

    <!-- Loading -->
    <div v-if="loading" class="text-center text-lg">
      Loading product...
    </div>

    <!-- Product Detail -->
    <div v-else class="max-w-6xl mx-auto">

      <!-- Back Button -->
      <button
        @click="$router.back()"
        class="mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      <div class="grid md:grid-cols-2 gap-10">

        <!-- Product Image -->
        <img
          :src="product.thumbnail"
          class="rounded-lg shadow-lg w-full"
        />

        <!-- Product Information -->
        <div>

          <h1 class="text-4xl font-bold mb-4">
            {{ product.title }}
          </h1>

          <p class="text-gray-600 mb-6">
            {{ product.description }}
          </p>

          <p class="text-2xl font-semibold mb-4">
            ${{ product.price }}
          </p>

          <p class="text-yellow-500 text-lg mb-4">
            ⭐ {{ product.rating }}
          </p>

          <p class="text-gray-500">
            Brand: {{ product.brand }}
          </p>

          <p class="text-gray-500">
            Category: {{ product.category }}
          </p>

        </div>

      </div>

    </div>

  </div>
</template>