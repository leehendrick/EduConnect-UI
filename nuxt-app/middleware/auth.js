import { getToken } from '~/services/auth.ts'

export default defineNuxtRouteMiddleware((to, from) => {
  const  isLoggedIn = getToken()
  if (isLoggedIn === null){
    return navigateTo('/login')
  }
})