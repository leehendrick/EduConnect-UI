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

const students = {
  curso: 'Técnico de Informática',
  classe: "12ª",
  turma: "INF-12A",
  sala: "13"
}

const formadores = [
  { disciplina: "Matemática", nome:"Anselmo Lourenço"},
  { disciplina: "Projecto Tecnologico", nome:"Odete Ferreira"},
  { disciplina: "Técnicas e Linguagens de Programação", nome:"Odete Ferreira"},
  { disciplina: "Sistema de Exploração e Arquitectura de Computadores - SEAC", nome:"Manuel Dos Santos"},
  { disciplina: "Física", nome:"Joelson Damião"},
  { disciplina: "Organização e Gestão Industrial - OGI", nome:"Cláudia João"},
  { disciplina: "Técnicas de Reparação de Equipamentos Informáticos - TREI", nome:"Giovani Vita"},
  { disciplina: "Empreendedorismo", nome:"Márcio De Almeida"},
  { disciplina: "Inglês Técnico", nome:"Mauro Alexandre"}
]

</script>

<template>
  <div class="">
    <div class="bg-secondary overflow-hidden shadow-gray-500 shadow-md sm:rounded-lg">
      <div class="text-white space-x-2 p-5 flex">
        <p>CURSO: {{students.curso}}</p>
        <div class="flex pl-96 space-x-2">
          <p>CLASSE: {{students.classe}}</p>
          <p>TURMA: {{students.turma}}</p>
          <p>SALA: {{students.sala}}</p>
        </div>
      </div>
    </div>
  </div>

    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300 border-2">
              <thead>
              <tr class="bg-secondary  text-white">
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">TEMPO</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">ORD</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">SEGUNDA</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">TERÇA</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">QUARTA</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">QUINTA</th>
                <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">SEXTA</th>
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

  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300 border-2">
            <thead>
            <tr class="bg-secondary  text-white">
              <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">DISCIPLINA</th>
              <th scope="col" class="px-3 py-3.5 text-left text-md font-extrabold ">NOME DO PROFESSOR</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
            <tr v-for="item in formadores">
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.disciplina }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.nome }}</td>
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