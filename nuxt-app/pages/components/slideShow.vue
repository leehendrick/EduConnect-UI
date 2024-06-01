<template>
  <div class="relative w-full max-w-6xl mx-auto overflow-hidden">
    <!-- Slides -->
    <div v-for="(slide, index) in slides" :key="index" class="slides" :class="{ 'active': index === currentSlide, 'inactive': index !== currentSlide }">
      <img :src="slide" alt="Slide Image" class="w-full h-full rounded-lg object-cover">
    </div>

    <!-- Navigation Buttons -->
    <button class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-900" @click="prevSlide">&#10094;</button>
    <button class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-900" @click="nextSlide">&#10095;</button>

    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span v-for="(slide, index) in slides" :key="'indicator-' + index" @click="currentSlide = index" :class="indicatorClass(index)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = ref([
  '/imptel_0.jpeg',
  '/imptel_2.jpeg',
  '/imptel_3.jpeg',
  '/imptel_4.jpeg',
]);

const currentSlide = ref(0);
let slideInterval;

const prevSlide = () => {
  currentSlide.value = (currentSlide.value > 0) ? currentSlide.value - 1 : slides.value.length - 1;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value < slides.value.length - 1) ? currentSlide.value + 1 : 0;
};

const startSlideShow = () => {
  slideInterval = setInterval(nextSlide, 4000); // Mudar slide a cada 4 segundos
};

const stopSlideShow = () => {
  clearInterval(slideInterval);
};

const indicatorClass = (index) => {
  return currentSlide.value === index ? 'bg-white w-3 h-3 rounded-full cursor-pointer' : 'bg-gray-500 w-3 h-3 rounded-full cursor-pointer';
};

onMounted(() => {
  startSlideShow();
});

onUnmounted(() => {
  stopSlideShow();
});
</script>

<style scoped>
.slides {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out;
  opacity: 0;
  transform: scale(0.95);
  filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.slides.active {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}

.slides.inactive {
  opacity: 0;
  transform: scale(0.95);
  filter: blur(5px);
}

.slides img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.relative {
  height: 500px; /* Ajuste a altura conforme necessário */
}

.slides-container {
  position: relative;
}

button {
  z-index: 10;
}

.indicatorClass {
  transition: background-color 0.3s ease;
}
</style>
