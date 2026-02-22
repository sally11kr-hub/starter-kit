'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAuthStore } from '@/stores/auth-store';

const navItems = [
  {
    label: '대시보드',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: '분석',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    label: '설정',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

const helpItems = [
  {
    label: '도움말',
    href: '/help',
    icon: HelpCircle,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col h-full w-64 border-r border-border bg-sidebar">
      {/* 헤더 */}
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary to-primary/50" />
        <span className="font-bold text-lg text-sidebar-foreground">StarterKit</span>
      </div>

      {/* 메인 네비게이션 */}
      <nav className="flex-1 space-y-1 px-4 py-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <Separator className="bg-sidebar-border" />

      {/* 도움말 및 설정 */}
      <nav className="space-y-1 px-4 py-4">
        {helpItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* 로그아웃 버튼 */}
      <div className="border-t border-sidebar-border px-4 py-4">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/50"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
        </Button>
      </div>
    </div>
  );
}
