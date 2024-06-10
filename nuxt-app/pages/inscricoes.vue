<script setup lang="ts">
import InscricaoForm from '~/components/inscricaoForm.vue'

const flag = ref(true);
const inscricao = () => {
  flag.value = false
}
</script>

<template>
    <Title>Imptel | Inscrições</Title>

  <div v-if="flag" class="container mx-auto px-4 py-8 flex flex-wrap mt-24">
    <!-- Lado Esquerdo: Cursos e Informações Relevantes -->
    <div class="w-full lg:w-1/2 pr-4 mb-8 lg:mb-0 border-r-2 border-gray-300">
      <h2 class="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">Cursos Disponíveis</h2>
      <div class="relative">
        <div class="container mx-auto text-white">
          <!-- Divisão do conteúdo -->
          <div class="flex flex-wrap">
            <!-- Divisão 1 -->
            <div class="w-full md:w-1/2 p-4">
              <div class="rounded-lg shadow-md p-6 border-2 border-secondary text-gray-800">
                <h2 class="text-lg font-extrabold mb-2">Electrónica e Telecomunicações</h2>
                <p>
                  Descubra os segredos dos circuitos eletrônicos, mergulhe na complexidade das telecomunicações ou explore as maravilhas da informática. Nossa equipe de especialistas está aqui para guiá-lo em cada passo do caminho, garantindo uma experiência de aprendizado envolvente e gratificante.
                </p>
              </div>
            </div>
            <!-- Divisão 2 -->
            <div class="w-full md:w-1/2 p-4">
              <div class="rounded-lg shadow-md p-6 border-2 border-green-600 text-gray-800">
                <h2 class="text-lg font-extrabold mb-2">Informática</h2>
                <p>
                  Explore o poder dos algoritmos, mergulhe na criação de aplicativos inovadores e domine as habilidades essenciais para se destacar neste campo dinâmico e em constante evolução. Com uma abordagem prática e orientação especializada, estamos aqui para ajudá-lo a alcançar seus objetivos e conquistar novos horizontes na área da informática.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Lado Direito: Requisitos -->
    <div class="w-full lg:w-1/2 pl-8 mb-8 lg:mb-0">
      <h2 class="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">Requisitos para Inscrição</h2>
      <ul class="list-disc pl-4">
        <li class="mb-2">Idade minima 14 anos,realizar 15 até maio</li>
        <li class="mb-2">Certificado da 9ºclasse</li>
        <li class="mb-2">1 fotografia tipo passe formato jpeg ou pdf</li>
        <li class="mb-2">Cartão de vacina</li>
        <li class="mb-2">Atestado medico</li>
        <li class="mb-2">Preenchimento do formulário de inscrição online.</li>
      </ul>
    </div>

    <!-- Call to Action -->
    <div class="w-full text-center">
      <p class="text-lg mb-4 mt-5 ">Pronto para inscrever seu filho em um de nossos cursos?</p>
      <button @click.prevent="inscricao" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">Inscreva agora!</button>
    </div>
  </div>
  <div v-else class="mt-32">
    <inscricao-form/>
  </div>
</template>

<style scoped>

</style>