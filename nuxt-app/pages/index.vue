
<script setup>
  import slideShowVue from './components/slideShow.vue';
  import SlideShow from '~/pages/components/slideShow.vue'
  import { FwbCarousel } from 'flowbite-vue'
  const title = useState('title')
  const notasInformativas = ref([
    {
      title:  'Atualização do Curso',
      content: 'Novo conteúdo adicionado ao curso de Eletrônica e Telecomunicações! Não perca as últimas novidades.',
    },
    {
      title:  'Evento Online',
      content: 'Junte-se a nós no próximo webinar sobre Inteligência Artificial na Informática. Inscreva-se agora!',
    },
    {
      title:  'Recursos Extras',
      content: 'Novos materiais de estudo disponíveis para download gratuito! Aproveite essa oportunidade.',
    }
  ])
  const quandroHonra = ref([
    {
      nomeAluno: 'Aline Lourenço',
      curso: 'Eléctronica e Telecomunicações',
      classe: '10ª classe',
      disciplinas: 'Matemática, Física',
      img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE3MTUxNzEyOTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
    {
      nomeAluno: 'Claudeth Luvumbua',
      curso: 'Electrônica e Telecomunicações',
      classe: '12ª classe',
      disciplinas: 'Matemática, Física',
      img: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE3MTUxNzExNTQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
      nomeAluno: 'Vilma Muafunga',
      curso: 'Informática',
      classe: '12ª classe',
      disciplinas: 'Química, Física',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZSxzdHVkZW50fHx8fHx8MTcxNTE3MDk3NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    }
  ])

  const pictures = [
    {src: '/public/estudante-sem-fundo.png', alt: 'Imagem'},
    {src: '/public/estudante-sem-fundo.png', alt: 'Imagem'},
    {src: '/public/estudante-sem-fundo.png', alt: 'Imagem'},
  ]
</script>

<template>
  <Title>Imptel | Home</Title>
  <main class="isolate">
    <!-- Hero section -->
    <div class="relative pt-14">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="relative w-full h-screen">
        <img class="w-full h-full object-cover" src="/estudante-sem-fundo.png" alt="Imagem">
        <div class="absolute inset-0 flex justify-center items-center">
          <div class="bg-opacity-50 p-6  w-full h-full object-cover">
            <div class="py-24 sm:py-32">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center font-san-francisco lg:text-left lg:ml-0 overflow-hidden">
                  <h1 class="typed-text  font-extrabold tracking-tight text-primary  sm:text-6xl">Surpreenda-se </h1>
                  <h1 class="typed-text  font-extrabold tracking-tight text-primary sm:text-6xl">com o aprendizado no</h1>
                  <h1 class="typed-text  font-extrabold tracking-tight text-primary sm:text-6xl">IMPTEL</h1>

                  <p class="mt-6 text-lg leading-8 font-san-francisco text-black">Explore um mundo de aprendizado <strong> emocionante e surpreendente no IMPTEL</strong>, onde cada descoberta é uma jornada de alegria e crescimento!</p>
                  <div class="mt-10 flex items-center justify-center gap-x-6">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-8 md:py-12 lg:py-16 bg-primary">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative flex justify-center mb-10">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Cursos Ministrados</h2>
          </div>
          <!-- Divisão do conteúdo -->
          <div class="flex text-white flex-wrap">
            <!-- Divisão 1 -->
            <div class="w-full md:w-1/2 p-4">
              <div class="rounded-lg shadow-md p-6 border-2 hover:border-secondary" data-scroll="bottom-to-top">
                <h2 class="text-lg font-extrabold mb-2">Electrônica e Telecomunicações</h2>
                <p>
                  Descubra os segredos dos circuitos eletrônicos, mergulhe na complexidade das telecomunicações ou explore as maravilhas da informática. Nossa equipe de especialistas está aqui para guiá-lo em cada passo do caminho, garantindo uma experiência de aprendizado envolvente e gratificante.
                </p>
                <a href="#" class=" mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
            <!-- Divisão 2 -->
            <div class="w-full md:w-1/2 p-4">
              <div class="rounded-lg shadow-md p-6 border-2 hover:border-green-600" data-scroll="bottom-to-top">
                <h2 class="text-lg font-extrabold mb-2">Informática</h2>
                <p>
                  Explore o poder dos algoritmos, mergulhe na criação de aplicativos inovadores e domine as habilidades essenciais para se destacar neste campo dinâmico e em constante evolução. Com uma abordagem prática e orientação especializada, estamos aqui para ajudá-lo a alcançar seus objetivos e conquistar novos horizontes na área da informática.
                </p>
                <a href="#" class=" mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>

      <div class="md:py-12 lg:py-16">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <slide-show/>
        </div>
      </div>

      <div class="py-8 md:py-12 lg:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-primary">Notas Informativas</h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Confira nossas últimas atualizações e informações importantes.</p>
          </div>
          <div class="mt-10">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <!-- Nota Informativa -->
              <div  v-for="item in notasInformativas" class="bg-white overflow-hidden shadow rounded-lg border-2 border-primary">
                <div class="px-4 py-5 sm:p-6">
                  <h3 class="text-lg font-medium text-gray-900">{{item.title}}</h3>
                  <div class="mt-2 text-sm text-gray-600">
                    <p>{{item.content}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-8 md:py-12 lg:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center border-t border-primary">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mt-10">Quadro de Honra</h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Conheça nossos alunos de destaque.</p>
            <div class="flex flex-wrap justify-center">
              <!-- Aluno 1 -->
              <div class="w-full md:w-1/2 lg:w-1/3 p-4" v-for="items in quandroHonra">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img class="ml-20 w-52 h-52 rounded-full" :src="items.img" alt="Imagem do Aluno 1">
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2"><strong>Nome:</strong> {{ items.nomeAluno }}</h3>
                    <p class="text-sm text-gray-600 mb-2"><strong>Curso:</strong> {{ items.curso }}</p>
                    <p class="text-sm text-gray-600 mb-2"><strong>Classe:</strong> {{ items.classe }}</p>
                    <p class="text-sm text-gray-600 mb-2"><strong>Disciplinas:</strong> {{ items.disciplinas }}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<style>

</style>
