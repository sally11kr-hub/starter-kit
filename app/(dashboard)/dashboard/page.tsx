'use client';

import { Users, TrendingUp, ShoppingCart, Activity } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/stats-card';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { StatCard, ActivityItem } from '@/types';

const stats: StatCard[] = [
  {
    title: '총 사용자',
    value: '2,543',
    description: '지난 달',
    icon: <Users className="h-4 w-4 text-primary" />,
    trend: {
      value: 12,
      isPositive: true,
    },
  },
  {
    title: '매출',
    value: '$45,231',
    description: '이번 달',
    icon: <TrendingUp className="h-4 w-4 text-primary" />,
    trend: {
      value: 8,
      isPositive: true,
    },
  },
  {
    title: '주문',
    value: '1,234',
    description: '총 주문 수',
    icon: <ShoppingCart className="h-4 w-4 text-primary" />,
    trend: {
      value: 3,
      isPositive: false,
    },
  },
  {
    title: '성장률',
    value: '24%',
    description: '전년 대비',
    icon: <Activity className="h-4 w-4 text-primary" />,
    trend: {
      value: 5,
      isPositive: true,
    },
  },
];

const activities: ActivityItem[] = [
  {
    id: '1',
    title: '새 사용자 가입',
    description: 'John Doe가 가입했습니다',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    status: 'success',
  },
  {
    id: '2',
    title: '주문 완료',
    description: '주문 #12345가 배송되었습니다',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    status: 'success',
  },
  {
    id: '3',
    title: '결제 대기 중',
    description: '주문 #12346의 결제 확인 대기',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    status: 'pending',
  },
  {
    id: '4',
    title: '오류 발생',
    description: '서버 동기화 실패',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    status: 'error',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">
          주요 통계 및 최근 활동을 확인하세요
        </p>
      </div>

      {/* 통계 카드 그리드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>

      {/* 탭 섹션 */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="analytics">분석</TabsTrigger>
          <TabsTrigger value="reports">보고서</TabsTrigger>
        </TabsList>

        {/* 개요 탭 */}
        <TabsContent value="overview" className="space-y-4">
          <RecentActivity activities={activities} />
        </TabsContent>

        {/* 분석 탭 */}
        <TabsContent value="analytics" className="space-y-4">
          <div className="text-center text-muted-foreground py-8">
            분석 데이터는 곧 제공됩니다.
          </div>
        </TabsContent>

        {/* 보고서 탭 */}
        <TabsContent value="reports" className="space-y-4">
          <div className="text-center text-muted-foreground py-8">
            보고서는 곧 제공됩니다.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
