<template>
  <div class="w-full h-screen">
    <Header/>
      <slot/>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import Header from "~/pages/components/header.vue";
import Footer from "~/pages/components/footer.vue";
</script>

