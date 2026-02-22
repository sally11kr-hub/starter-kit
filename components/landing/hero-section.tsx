import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        {/* 배지 */}
        <div className="inline-block rounded-full border border-border bg-card px-4 py-1.5">
          <p className="text-sm text-muted-foreground">
            🚀 Next.js 15 & React 19 기반 스타터킷
          </p>
        </div>

        {/* 제목 */}
        <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
          현대적인 웹앱 개발을
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            {' '}
            빠르게 시작하세요
          </span>
        </h1>

        {/* 설명 */}
        <p className="text-lg text-muted-foreground md:text-xl">
          TypeScript, Tailwind CSS, shadcn/ui가 포함된 완전한 스타터킷.
          <br />
          인증, 다크모드, 상태관리, 폼 유효성 검사까지 모두 준비되어 있습니다.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/dashboard">
              대시보드 이동
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub 보기
            </a>
          </Button>
        </div>

        {/* 기술 스택 미리보기 */}
        <div className="pt-8">
          <p className="text-sm text-muted-foreground mb-4">포함된 기술 스택</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Next.js 15',
              'React 19',
              'TypeScript',
              'TailwindCSS v4',
              'shadcn/ui',
              'Zustand v5',
              'React Hook Form',
              'Zod',
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 배경 그래디언트 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
}
