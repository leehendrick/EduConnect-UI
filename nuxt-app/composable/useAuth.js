export function useAuth(key, value){
  function setUser(name){
    localStorage.setItem('user', JSON.stringify({name}))
  }

  function getUser(){
    return JSON.parse(localStorage.getItem('user'))
  }

  function removeUser(){
    localStorage.removeItem('user')
  }

  const isLoggedIn = computed(() => {
    return !!localStorage.getItem('user')
  })

  return {
    setUser,
    getUser,
    removeUser,
    isLoggedIn
  }
}