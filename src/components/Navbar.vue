<script setup lang="ts">
import { ref } from "vue"
import { useSearchStore } from "../stores/searchStore"

const searchText = ref("")

const store = useSearchStore()

function updateSearch() {
  store.setSearch(searchText.value)
}
</script>

<template>
  <header class="bg-white px-10 py-5 flex items-center justify-between shadow">

    <!-- Logo -->
    <div class="text-2xl font-bold">
      <span class="text-red-600">Camera</span>
      <span class="text-black">Gear 📷</span>
    </div>

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

      <div class="cursor-pointer hover:text-red-600">
        🔥 Hot Deals
      </div>

      <div class="cursor-pointer hover:text-red-600">
        👤 My Account
      </div>

      <div class="cursor-pointer hover:text-red-600">
        🛒 My Cart »
      </div>

    </div>

  </header>
</template>