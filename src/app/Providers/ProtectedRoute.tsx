"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário está autenticado
    if (!user) {
      // Se não estiver autenticado e o carregamento foi concluído, redireciona para a tela de início
      router.push('/');
    }
  }, [user, router]);

  // Se o usuário estiver autenticado ou o carregamento ainda estiver em andamento, renderiza o conteúdo da rota protegida
  return user ? children : null;
};

export default ProtectedRoute;