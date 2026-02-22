'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { loginSchema, type LoginFormData } from '@/lib/validations/auth';
import { useAuthStore } from '@/stores/auth-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);

      // 시뮬레이션: 실제로는 백엔드 API 호출
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 사용자 정보 설정 (실제로는 API 응답에서 받음)
      setUser({
        id: '1',
        email: data.email,
        name: '사용자',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
      });

      // 대시보드로 이동
      router.push('/dashboard');
      router.refresh();
    } catch (error) {
      console.error('로그인 실패:', error);
      form.setError('email', {
        type: 'manual',
        message: '로그인에 실패했습니다. 다시 시도해주세요.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* 이메일 필드 */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="email">이메일</Label>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 비밀번호 필드 */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="password">비밀번호</Label>
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 제출 버튼 */}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? '로그인 중...' : '로그인'}
        </Button>
      </form>
    </Form>
  );
}
