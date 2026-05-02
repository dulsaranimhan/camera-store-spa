<script setup lang="ts">
import Navbar from "../components/Navbar.vue"
import CategoryMenu from "../components/CategoryMenu.vue"
import FooterSection from "../components/FooterSection.vue"
</script>

<template>
  <Navbar />
  <CategoryMenu />

  <section class="min-h-[550px] px-16 py-10 bg-white">
    <h1 class="text-2xl font-bold text-gray-600 mb-6">
      Your Cart (1 item)
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 bg-gray-200 p-6 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <div class="w-24 h-20 bg-gray-300 rounded flex items-center justify-center">
            📷
          </div>

          <div>
            <h2 class="font-bold">Sony Alpha 6300 Mirrorless Camera</h2>
            <p class="text-green-600 text-sm font-bold">
              In Stock | Delivery in 4 to 6 days
            </p>
          </div>
        </div>

        <div class="font-semibold">Rs. 230 000.00</div>

        <div class="flex items-center gap-2">
          <button class="px-2 bg-white">−</button>
          <span class="bg-white px-3">1</span>
          <button class="px-2 bg-white">+</button>
        </div>

        <div class="font-semibold">Rs. 230 000.00</div>
      </div>

      <div>
        <div class="bg-gray-200 p-5">
          <h2 class="font-bold mb-4">Price Details (1 Item)</h2>

          <div class="flex justify-between text-sm mb-3">
            <span>Subtotal (Excl. VAT)</span>
            <span>Rs. 230 000.00</span>
          </div>

          <div class="flex justify-between text-sm mb-4">
            <span>Shipping</span>
            <span>Rs. 1000.00</span>
          </div>

          <div class="flex justify-between font-bold text-lg border-t pt-4">
            <span>Total</span>
            <span>Rs. 231 000.00</span>
          </div>
        </div>

        <button class="w-full bg-green-500 text-white font-bold py-4 mt-4">
          Checkout
        </button>

        <router-link
          to="/"
          class="block text-center w-full bg-gray-200 py-4 mt-3"
        >
          Continue Shopping
        </router-link>
      </div>
    </div>
  </section>

  <FooterSection />
</template>