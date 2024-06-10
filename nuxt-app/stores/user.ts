// ~/stores/user.ts
import { defineStore } from 'pinia';
import { getUserData } from '~/services/auth'; // Importe a função getUserData do serviço de autenticação

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null as { nome: string } | null,
  }),
  actions: {
    fetchUserData() {
      this.userData = getUserData();
    },
  },
});
