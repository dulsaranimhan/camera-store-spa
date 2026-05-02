<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { products } from "../data/products"
import Navbar from "../components/Navbar.vue"
import CategoryMenu from "../components/CategoryMenu.vue"
import FooterSection from "../components/FooterSection.vue"

const route = useRoute()
const router = useRouter()

const productId = route.params.id as string
const product = products.find((p) => p.id === productId)

const addedToCart = ref(false)

function addToCart() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]")

  const existingItem = cart.find((item: any) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      id: productId,
      quantity: 1,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  window.dispatchEvent(new Event("cart-updated"))

  addedToCart.value = true

  setTimeout(() => {
    addedToCart.value = false
  }, 2000)
}

function goToCart() {
  router.push(`/checkout/${productId}`)
}
</script>

<template>
  <Navbar />
  <CategoryMenu />

  <section
    v-if="product"
    class="px-10 py-14 min-h-[600px]"
  >
    <div class="grid md:grid-cols-2 gap-10">
      <img
        :src="product.image"
        :alt="product.name"
        class="rounded-xl shadow-lg w-full max-h-[520px] object-contain"
      />

      <div>
        <h1 class="text-4xl font-bold mb-6">
          {{ product.name }}
        </h1>

        <p class="text-gray-600 text-lg mb-8">
          {{ product.description }}
        </p>

        <p class="text-3xl font-bold mb-8">
          Rs. {{ product.price.toLocaleString() }}
        </p>

        <div class="flex gap-4">
          <button
            @click="addToCart"
            class="bg-red-600 text-white px-8 py-3 rounded font-bold hover:bg-red-700"
          >
            Add Cart
          </button>

          <button
            @click="goToCart"
            class="bg-black text-white px-8 py-3 rounded font-bold hover:bg-gray-800"
          >
            Go to Cart
          </button>
        </div>

        <p
          v-if="addedToCart"
          class="mt-4 text-green-600 font-bold"
        >
          ✅ Added to cart successfully
        </p>
      </div>
    </div>
  </section>

  <section
    v-else
    class="text-center py-20 text-gray-500 min-h-[500px]"
  >
    Product not found
  </section>

  <FooterSection />
</template>