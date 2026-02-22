import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        {/* 헤더 */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">StarterKit</h1>
          <p className="text-sm text-muted-foreground">
            계정에 로그인하여 계속하세요
          </p>
        </div>

        {/* 로그인 폼 */}
        <LoginForm />

        {/* 회원가입 링크 */}
        <p className="text-center text-sm text-muted-foreground">
          계정이 없으신가요?{' '}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            회원가입
          </Link>
        </p>
      </Card>
    </div>
  );
}
