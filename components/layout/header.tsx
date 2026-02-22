import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/50" />
          <span className="font-bold text-lg">StarterKit</span>
        </Link>

        {/* 네비게이션 */}
        <nav className="hidden gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            기능
          </Link>
          <Link
            href="#docs"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            문서
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>

        {/* 우측 액션 */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/login">로그인</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
