<script setup lang="ts">
</script>

<template>
  <section class="relative bg-gray-200 py-10 overflow-hidden">

    <!-- Background Image -->
    <img
      src="/src/assets/sony-camera.png"
      class="w-full h-full object-cover"
    />

    <!-- Top Row -->
    <div class="absolute left-0 right-0 top-[45%] grid grid-cols-3 gap-6 px-6">
      
      <router-link
        to="/category/photography"
        class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold hover:scale-105 transition"
      >
        Photography
      </router-link>

      <router-link
        to="/category/pro-video"
        class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold hover:scale-105 transition"
      >
        Pro Video
      </router-link>

      <router-link
        to="/category/drones"
        class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold hover:scale-105 transition"
      >
        Drones
      </router-link>

    </div>

    <!-- Bottom Row -->
    <div class="absolute left-0 right-0 bottom-[12%] grid grid-cols-3 gap-6 px-6">

      <router-link
        to="/category/lighting"
        class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold hover:scale-105 transition"
      >
        Lighting
      </router-link>

      <router-link
        to="/category/audio"
        class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold hover:scale-105 transition"
      >
        Audio
      </router-link>

      <router-link
        to="/category/gaming"
        class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold hover:scale-105 transition"
      >
        Gaming
      </router-link>

    </div>

  </section>
</template>