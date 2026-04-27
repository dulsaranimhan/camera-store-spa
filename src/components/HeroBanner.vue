<script setup lang="ts">
import cameraImage from "../assets/sony-camera.png"
</script>

<template>
  <section class="bg-gray-200 py-12 overflow-hidden">
    <div class="relative max-w-5xl mx-auto">
      <img
        :src="cameraImage"
        alt="Sony camera"
        class="mx-auto w-full max-w-[850px]"
      />

      <div class="absolute left-0 right-0 top-[45%] grid grid-cols-3 gap-6 px-6">
        <div class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold">
          Photography
        </div>

        <div class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold">
          Pro Video
        </div>

        <div class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold">
          Drones
        </div>
      </div>

      <div class="absolute left-0 right-0 bottom-[12%] grid grid-cols-3 gap-6 px-6">
        <div class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold">
          Lighting
        </div>

        <div class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold">
          Audio
        </div>

        <div class="bg-white/90 shadow-lg rounded-lg py-6 text-center font-bold">
          Gaming
        </div>
      </div>
    </div>
  </section>
</template>