import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  id: number;
  email: string;
  nome: string;
}


export function login(email: string, senha: string) {
  return $fetch('http://localhost:4002/api/users/login', {
    method: 'POST',
    body: {email, senha},
  });
}

export function getDataByBi(bi: string){
  return $fetch(`https://bi.minjusdh.gov.ao/api/identityLostService/identitycardlost/queryRegisterInfo/${bi}`, {
    method: 'GET'
  });
}

export function logout() {
  const router = useRouter();
  const accessToken = ref<string | null>(localStorage.getItem('accessToken'));

    accessToken.value = null;
    localStorage.removeItem('accessToken');
    router.push('/login').then(r => {
      console.log('EVERYTHING LOOKS FINE')
    });
}
export function decodedToken(token: string): DecodedToken{
  return jwtDecode<DecodedToken>(token);
}

export function getToken(): string | null {
  if (typeof window !== 'undefined'){
    return localStorage.getItem('token');
  }
  return null;
}

// @ts-ignore
export function getUserData(): DecodedToken | null {
  const token = getToken();
  if (token) {
    return decodedToken(token);
  }
  return null;
}