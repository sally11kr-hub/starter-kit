// 사용자 정보
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

// API 응답 제네릭
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// 페이지 나누기 응답
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

// 네비게이션 아이템
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  badge?: string;
}

// 통계 카드
export interface StatCard {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

// 최근 활동
export interface ActivityItem {
  id: string;
  title: string;
  description?: string;
  timestamp: Date;
  icon?: React.ReactNode;
  status?: 'success' | 'pending' | 'error';
}
