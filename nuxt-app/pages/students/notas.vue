<script setup lang="ts">

import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

definePageMeta({
  layout: 'students-layout',
})

const notas = [
  {disciplinas: "Matemática", media: 10, faltas: 24},
  {disciplinas: "Física", media: 10, faltas: 27},
  {disciplinas: "O.G.I", media: 10, faltas: 27},
  {disciplinas: "Empreendedorismo", media: 10, faltas: 27},
  {disciplinas: "SEAC", media: 10, faltas: 27},
  {disciplinas: "Inglês Técnico", media: 10, faltas: 27},
  {disciplinas: "T.L.P", media: 10, faltas: 27},
  {disciplinas: "T.R.E.I", media: 10, faltas: 27},
  {disciplinas: "Matemática", media: 10, faltas: 27},
  {disciplinas: "P.T", media: 10, faltas: 27},
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
        <form class="max-w-sm mx-5">
          <label for="underline_select_1" class="sr-only">Underline select</label>
          <select id="underline_select_1" class="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Escolha a classe</option>
            <option value="US">10ª</option>
            <option value="CA">11ª</option>
            <option value="FR">12ª</option>
            <option value="DE">13ª</option>
          </select>
        </form>
        <form class="max-w-sm">
          <label for="underline_select_2" class="sr-only">Underline select</label>
          <select id="underline_select_2" class="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Escolha o trimestre</option>
            <option value="US">Primeiro</option>
            <option value="CA">Segundo</option>
            <option value="FR">Terceiro</option>
          </select>
        </form>
      </div>
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table class="min-w-full divide-y divide-gray-300 border-2 mb-5">
                <thead>
                <tr class="bg-secondary  text-white">
                  <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">DISCIPLINAS</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">MÉDIA</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">FALTAS</th>
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
              <div class=" m-2 bg-secondary overflow-hidden shadow-gray-500 shadow-md sm:rounded-lg">
                <div class="text-white space-x-2 p-5 flex justify-end">
                  <h1>Média Final: 10</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>