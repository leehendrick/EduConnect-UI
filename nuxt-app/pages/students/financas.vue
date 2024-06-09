<script setup lang="ts">
definePageMeta({
  layout: 'students-layout',
})
</script>

<template>
  <div class="container mx-auto p-4 overflow-hidden shadow-gray-300 shadow-md sm:rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Controle de Propinas</h1>
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
      <tr class="w-full bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
        <th class="py-3 px-4 border-b border-gray-200">Nome do Aluno</th>
        <th class="py-3 px-4 border-b border-gray-200">Curso</th>
        <th class="py-3 px-4 border-b border-gray-200">Data de Pagamento</th>
        <th class="py-3 px-4 border-b border-gray-200">Valor</th>
        <th class="py-3 px-4 border-b border-gray-200">Status</th>
        <th class="py-3 px-4 border-b border-gray-200">Ações</th>
      </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
      <tr class="border-b border-gray-200 hover:bg-gray-100">
        <td class="py-3 px-4 border-b border-gray-200">João Silva</td>
        <td class="py-3 px-4 border-b border-gray-200">Engenharia</td>
        <td class="py-3 px-4 border-b border-gray-200">01/05/2024</td>
        <td class="py-3 px-4 border-b border-gray-200">R$ 1000,00</td>
        <td class="py-3 px-4 border-b border-gray-200">Pago</td>
        <td class="py-3 px-4 border-b border-gray-200">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Editar
          </button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
            Excluir
          </button>
        </td>
      </tr>
      <!-- Adicione mais linhas conforme necessário -->
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
