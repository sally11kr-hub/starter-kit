'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types';

// 인증 스토어 타입 정의
interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
  setLoading: (isLoading: boolean) => void;
}

// Zustand v5: persist 미들웨어 사용
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      setUser: (user: User) =>
        set({
          user,
          isAuthenticated: true,
          isLoading: false,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        }),
      setLoading: (isLoading: boolean) => set({ isLoading }),
    }),
    {
      name: 'auth-store',
      // Zustand v5: 클라이언트 사이드 hydration 자동 처리
    }
  )
);
