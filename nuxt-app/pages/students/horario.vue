<script setup lang="ts">

definePageMeta({
  layout: 'students-layout',
})

const horario = [
  { tempo: "12H30 - 13H15", ord: "1º", segunda: "TREI", terca: "OGI", quarta: "MAT", quinta: "SEAC", sexta: "PROJ. TECN" },
  { tempo: "13H20 - 14H05", ord: "2º", segunda: "TREI", terca: "OGI", quarta: "MAT", quinta: "SEAC", sexta: "PROJ. TECN" },
  { tempo: "14H10 - 14H55", ord: "3º", segunda: "TREI", terca: "MAT", quarta: "EMP", quinta: "SEAC", sexta: "TLP" },
  { tempo: "15H10 - 15H55", ord: "4º", segunda: "TREI", terca: "MAT", quarta: "EMP", quinta: "SEAC", sexta: "TLP" },
  { tempo: "16H00 - 16H45", ord: "5º", segunda: "TREI", terca: "", quarta: "ING. TEC.", quinta: "FIS", sexta: "TLP" },
  { tempo: "16H50 - 17H35", ord: "6º", segunda: "TREI", terca: "", quarta: "ING. TEC.", quinta: "FIS", sexta: "TLP" },
]

</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
              <tr>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold text-gray-900">TEMPO</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold text-gray-900">ORD</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold text-gray-900">SEGUNDA</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold text-gray-900">TERÇA</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold text-gray-900">QUARTA</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold text-gray-900">QUINTA</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold text-gray-900">SEXTA</th>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
              <tr v-for="item in horario">
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.tempo }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.ord }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.segunda}}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.terca }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.quarta }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.quinta }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.sexta }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
<style scoped>

</style>