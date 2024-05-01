<template>
  <div class="w-full h-screen">
    <Header/>
      <slot/>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";

const title = useState('title', () => 'Imptel')
</script>

