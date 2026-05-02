<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import Navbar from "../components/Navbar.vue"
import CategoryMenu from "../components/CategoryMenu.vue"
import FooterSection from "../components/FooterSection.vue"

const route = useRoute()

const productsData = {
  photography: {
    title: "Digital Cameras",
    products: [
      { id: "sony-a7-iv", name: "Sony A7 IV", price: "Rs.430 000" },
      { id: "nikon-d7500", name: "Nikon D7500", price: "Rs.280 000" },
      { id: "sony-a7-iii", name: "Sony A7 III", price: "Rs.320 000" },
      { id: "sony-a7-v", name: "Sony A7 V", price: "Rs.830 000" },
      { id: "canon-r5", name: "Canon R5", price: "Rs.310 000" },
      { id: "nikon-z5", name: "Nikon Z5", price: "Rs.530 000" },
      { id: "sony-a6400", name: "Sony a6400", price: "Rs.230 000" },
      { id: "canon-4000d", name: "Canon 4000D", price: "Rs.220 000" },
    ],
  },
  "pro-video": {
    title: "Video Cameras",
    products: [
      { id: "sony-pxw-z280", name: "Sony PXW-Z280", price: "Rs.680 000" },
      { id: "canon-xa60b", name: "Canon XA60B", price: "Rs.359 000" },
      { id: "sony-fdr", name: "Sony FDR", price: "Rs.210 000" },
      { id: "sony-xhr-nx200", name: "Sony XHR-NX200", price: "Rs.774 000" },
    ],
  },
  drones: {
    title: "Drones",
    products: [
      { id: "dji-phantom-4", name: "DJI Phantom 4", price: "Rs.320 000" },
      { id: "dji-neo-2", name: "DJI Neo 2", price: "Rs.134 000" },
      { id: "dji-mavic-mini", name: "DJI Mavic MINI", price: "Rs.285 000" },
      { id: "dji-mavic-pro", name: "DJI Mavic Pro", price: "Rs.615 000" },
    ],
  },
  lighting: {
    title: "Lights",
    products: [
      { id: "godox-tt350", name: "GODOX TT350", price: "Rs.60 000" },
      { id: "godox-tt400", name: "GODOX TT400", price: "Rs.65 000" },
      { id: "godox-softbox", name: "GODOX Softbox", price: "Rs.47 000" },
    ],
  },
  audio: {
    title: "Headphones",
    products: [
      { id: "jbl-720bt", name: "JBL 720BT", price: "Rs.18 000" },
      { id: "jbl-750bt", name: "JBL 750BT", price: "Rs.25 000" },
    ],
  },
  gaming: {
    title: "Play Stations",
    products: [
      { id: "ps5", name: "PS 5", price: "Rs.320 000" },
    ],
  },
}

const categoryName = computed(() => route.params.name as keyof typeof productsData)

const category = computed(() => {
  return productsData[categoryName.value] || productsData.photography
})
</script>

<template>
  <Navbar />
  <CategoryMenu />

  <section class="bg-black text-white min-h-[600px] px-16 py-16">
    <h1 class="text-4xl mb-14">
      {{ category.title }}
    </h1>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
      <router-link
        v-for="product in category.products"
        :key="product.id"
        :to="`/product/${product.id}`"
        class="bg-gray-200 text-black rounded-lg p-5 text-center hover:scale-105 transition"
      >
        <div class="h-32 bg-white rounded mb-4 flex items-center justify-center">
          📷
        </div>

        <h2 class="font-bold text-xl">
          {{ product.name }}
        </h2>

        <p class="text-red-600 font-bold">
          {{ product.price }}
        </p>
      </router-link>
    </div>
  </section>

  <FooterSection />
</template>