<template>

  <h2 class="text-2xl font-bold text-center">Inscrição de Aluno</h2>

  <form class="flex mt-5 items-center max-w-lg mx-auto">
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
      <input type="text" v-model="bi" id="bi" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full ps-10 p-2.5 " placeholder="Digite o número de BI..." required />
    </div>
    <button @click.prevent="getBi(bi)" type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>Search
    </button>
  </form>

  <div class="container bg-white p-8 rounded-lg shadow-lg m-auto">
    <form @submit.prevent="submitForm">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold mb-2">Nome</label>
          <input v-model="form.name" type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
        </div>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold mb-2">Apelido</label>
          <input v-model="form.apelido" type="text" id="apelido" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">Telefone</label>
          <input v-model="form.telefone" type="tel" id="telefone" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700 font-semibold mb-2">Endereço</label>
          <input v-model="form.endereco" type="text" id="endereco" name="phone" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
        </div>
        <div class="mb-4">
          <div>
            <label for="location" class="text-gray-700 font-semibold mb-2">Curso</label>
            <select v-model="form.curso" id="curso" name="location" class="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Informática</option>
              <option>Electrônica e Telecomunicação</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

      </div>
      <div class="text-center">
        <button type="submit" class="w-52 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Enviar Inscrição</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getDataByBi } from '~/services/auth'

const form = ref({
  name: '',
  apelido: '',
  telefone: '',
  endereco: '',
  curso: '',
  bi: '',
})
 const bi = ref('')
const biData = ref(null)
const submitForm = () => {
  console.log('Form submitted:', form.value)
  // Adicione aqui a lógica para enviar o formulário
}

 const getBi = async (bi) => {
  try {
    biData.value = await getDataByBi(bi)
    console.log()
    form.value.name = biData.value.data.FIRST_NAME
    form.value.apelido = biData.value.data.LAST_NAME
    form.value.bi = biData.value.data.ID_NUMBER
    form.value.endereco = biData.value.data.ADDRESS
    form.value.telefone = biData.value.data.CONTACT_MOBILE
  } catch (e) {
    console.log('Houve um erro ao pesquisar bi', e)
  }
}
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>
