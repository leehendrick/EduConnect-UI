import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  id: number;
  email: string;

}

export function login(email: string, senha: string) {
  return $fetch('/api/login', {
    method: 'POST',
    body: {email, senha},
  });
}

export function decodedToken(token: string): DecodedToken{
  return jwtDecode<DecodedToken>(token);
}

export function getToken(): string | null {
  return localStorage.getItem('accessToken');
}

export function getUserData(): DecodedToken | null {
  const token = getToken();
  if (token) {
    return decodedToken(token);
  }
}