<script setup lang="ts">

import { ref, onMounted } from 'vue';

const userData = ref(null);

definePageMeta({
  layout: 'students-layout',
  middleware: 'auth'
})


const stats = [
  { name: 'Total de disciplinas', stat: '10' },
  { name: 'Média geral', stat: '15 V' },
  { name: 'Progresso do ano lectivo', stat: '60.23%' },
]

</script>

<template>
  <div class="">
    <div>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div v-for="item in stats" :key="item.name" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-md shadow-secondary sm:p-6">
          <dt class="truncate text-sm font-medium text-gray-500">{{ item.name }}</dt>
          <dd class="mt-1 text-3xl font-semibold tracking-tight text-secondary">{{ item.stat }}</dd>
        </div>
      </dl>
    </div>
    <div class="py-5">
      <div class="bg-secondary overflow-hidden shadow-gray-500 shadow-md sm:rounded-lg">
        <div class="p-6 text-white">You're logged in!</div>
      </div>
    </div>
  </div>
</template>