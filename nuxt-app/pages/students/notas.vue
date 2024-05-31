<script setup lang="ts">

definePageMeta({
  layout: 'students-layout',
})

</script>

<template>
  <div class="">
    <div class="overflow-hidden shadow-gray-300 shadow-md sm:rounded-lg">
      <div class="text-white space-x-2 p-5 flex justify-end">
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
    </div>
  </div>
</template>
<style scoped>

</style>