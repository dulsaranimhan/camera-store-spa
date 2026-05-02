<script setup lang="ts">
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import Navbar from "../components/Navbar.vue"
import CategoryMenu from "../components/CategoryMenu.vue"
import FooterSection from "../components/FooterSection.vue"
import { products } from "../data/products"

const router = useRouter()

const cart = ref(JSON.parse(localStorage.getItem("cart") || "[]"))

const shipping = 1000
const showSuccess = ref(false)

const cartItems = computed(() =>
  cart.value
    .map((cartItem: any) => {
      const product = products.find((item) => item.id === cartItem.id)

      if (!product) return null

      return {
        ...product,
        quantity: cartItem.quantity,
      }
    })
    .filter(Boolean)
)

const subtotal = computed(() =>
  cartItems.value.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  )
)

const total = computed(() =>
  cartItems.value.length > 0 ? subtotal.value + shipping : 0
)

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart.value))
}

function increaseQuantity(id: string) {
  const item = cart.value.find((cartItem: any) => cartItem.id === id)

  if (item) {
    item.quantity += 1
    saveCart()
  }
}

function decreaseQuantity(id: string) {
  const item = cart.value.find((cartItem: any) => cartItem.id === id)

  if (!item) return

  if (item.quantity > 1) {
    item.quantity -= 1
  } else {
    cart.value = cart.value.filter((cartItem: any) => cartItem.id !== id)
  }

  saveCart()
}

function placeOrder() {
  showSuccess.value = true
  localStorage.removeItem("cart")
  cart.value = []
}

function closePopup() {
  showSuccess.value = false
  router.push("/")
}

function continueShopping() {
  router.push("/")
}
</script>

<template>
  <Navbar />
  <CategoryMenu />

  <section class="min-h-[550px] px-16 py-10 bg-white">
    <div v-if="cartItems.length > 0">
      <h1 class="text-2xl font-bold text-gray-600 mb-6">
        Your Cart ({{ cartItems.length }} items)
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-4">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="bg-gray-200 p-6 flex items-center justify-between gap-6"
          >
            <div class="flex items-center gap-6">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-24 h-20 object-contain bg-gray-300 rounded"
              />

              <div>
                <h2 class="font-bold">
                  {{ item.name }}
                </h2>

                <p class="text-green-600 text-sm font-bold">
                  In Stock | Delivery in 4 to 6 days
                </p>
              </div>
            </div>

            <div class="font-semibold">
              Rs. {{ item.price.toLocaleString() }}.00
            </div>

            <div class="flex items-center gap-2">
              <button
                @click="decreaseQuantity(item.id)"
                class="px-3 py-1 bg-white font-bold hover:bg-gray-300"
              >
                −
              </button>

              <span class="bg-white px-4 py-1">
                {{ item.quantity }}
              </span>

              <button
                @click="increaseQuantity(item.id)"
                class="px-3 py-1 bg-white font-bold hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <div class="font-semibold">
              Rs. {{ (item.price * item.quantity).toLocaleString() }}.00
            </div>
          </div>
        </div>

        <!-- Price Box -->
        <div>
          <div class="bg-gray-200 p-5">
            <h2 class="font-bold mb-4">
              Price Details ({{ cartItems.length }} Items)
            </h2>

            <div class="flex justify-between text-sm mb-3">
              <span>Subtotal</span>
              <span>Rs. {{ subtotal.toLocaleString() }}.00</span>
            </div>

            <div class="flex justify-between text-sm mb-4">
              <span>Shipping</span>
              <span>Rs. {{ shipping.toLocaleString() }}.00</span>
            </div>

            <div class="flex justify-between font-bold text-lg border-t pt-4">
              <span>Total</span>
              <span>Rs. {{ total.toLocaleString() }}.00</span>
            </div>
          </div>

          <button
            @click="placeOrder"
            class="w-full bg-green-500 text-white font-bold py-4 mt-4 hover:bg-green-600"
          >
            Checkout
          </button>

          <button
            @click="continueShopping"
            class="w-full bg-gray-200 py-4 mt-3 hover:bg-gray-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>

    <!-- Empty Cart -->
    <div v-else class="text-center py-24">
      <h1 class="text-3xl font-bold mb-4">
        Your Cart is Empty
      </h1>

      <p class="text-gray-500 mb-6">
        Add a product to your cart first.
      </p>

      <button
        @click="continueShopping"
        class="bg-red-600 text-white px-6 py-3 rounded font-bold"
      >
        Continue Shopping
      </button>
    </div>
  </section>

  <!-- Success Popup -->
  <div
    v-if="showSuccess"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-lg shadow-xl p-10 text-center w-[400px]">
      <div class="text-5xl mb-4">
        ✅
      </div>

      <h2 class="text-2xl font-bold mb-3">
        Order Placed Successfully
      </h2>

      <p class="text-gray-600 mb-6">
        Thank you for shopping with CameraGear.
      </p>

      <button
        @click="closePopup"
        class="bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-700"
      >
        Back to Home
      </button>
    </div>
  </div>

  <FooterSection />
</template>