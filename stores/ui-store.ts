'use client';

import { create } from 'zustand';

// UI 스토어 타입 정의
interface UiState {
  isSidebarOpen: boolean;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  toggleCollapse: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  setSidebarCollapsed: (isCollapsed: boolean) => void;
}

// Zustand v5: 간단한 UI 상태 관리
export const useUiStore = create<UiState>((set) => ({
  isSidebarOpen: true,
  isSidebarCollapsed: false,
  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),
  toggleCollapse: () =>
    set((state) => ({
      isSidebarCollapsed: !state.isSidebarCollapsed,
    })),
  setSidebarOpen: (isOpen: boolean) =>
    set({
      isSidebarOpen: isOpen,
    }),
  setSidebarCollapsed: (isCollapsed: boolean) =>
    set({
      isSidebarCollapsed: isCollapsed,
    }),
}));
