<script setup lang="ts">

import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

definePageMeta({
  layout: 'students-layout',
})

const notas = [
]
</script>

<template>
  <div class="">
    <div class="overflow-hidden shadow-gray-300 shadow-md sm:rounded-lg">
      <div class="text-white space-x-2 p-5 flex justify-end">
        <form class="relative" action="#" method="GET">
          <MagnifyingGlassIcon class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" aria-hidden="true" />
          <input id="search-field" class="block h-full w-auto border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." type="search" name="search" />
        </form>
        <button class="bg-secondary text-white p-2 font-extrabold rounded-md hover:bg-blue-700">Solicitar</button>
      </div>
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table class="min-w-full divide-y divide-gray-300 border-2 mb-5">
                <thead>
                <tr class="bg-secondary  text-white">
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-extrabold ">TIPO DE SOLICITAÇÃO</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-extrabold ">DATA-ENVIO</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-extrabold ">STATUS</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-extrabold ">NOTA</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                <tr v-for="item in notas">
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.disciplinas }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.media }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-red-500">{{ item.faltas }}</td>
                </tr>
                </tbody>
              </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>