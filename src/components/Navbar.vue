<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { useRouter } from "vue-router"
import { useSearchStore } from "../stores/searchStore"

const router = useRouter()
const searchText = ref("")
const store = useSearchStore()

const cartCount = ref(0)

function updateSearch() {
  store.setSearch(searchText.value)
}

function goToHotDeals() {
  router.push("/").then(() => {
    setTimeout(() => {
      document.getElementById("hot-deals")?.scrollIntoView({
        behavior: "smooth",
      })
    }, 100)
  })
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]")

  cartCount.value = cart.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  )
}

onMounted(() => {
  updateCartCount()
  window.addEventListener("cart-updated", updateCartCount)
})

onUnmounted(() => {
  window.removeEventListener("cart-updated", updateCartCount)
})
</script>

<template>
  <header class="bg-white px-10 py-5 flex items-center justify-between shadow">

    <!-- Logo -->
    <router-link
      to="/"
      class="text-2xl font-bold cursor-pointer"
    >
      <span class="text-red-600">Camera</span>
      <span class="text-black">Gear 📷</span>
    </router-link>

    <!-- Search bar -->
    <input
      v-model="searchText"
      @input="updateSearch"
      type="text"
      placeholder="Search Products"
      class="w-[420px] px-4 py-2 rounded bg-gray-100 border outline-none"
    />

    <!-- Right side menu -->
    <div class="flex items-center gap-8 text-sm font-semibold">

      <button
        @click="goToHotDeals"
        class="cursor-pointer hover:text-red-600"
      >
        🔥 Hot Deals
      </button>

      <div class="cursor-pointer hover:text-red-600">
        👤 My Account
      </div>

      <router-link
        to="/checkout/sony-a7-iv"
        class="relative cursor-pointer hover:text-red-600"
      >
        🛒 My Cart »

        <span
          v-if="cartCount > 0"
          class="absolute -top-3 -right-4 bg-red-600 text-white text-xs rounded-full px-2 py-0.5"
        >
          {{ cartCount }}
        </span>
      </router-link>

    </div>

  </header>
</template>