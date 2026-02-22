import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Palette,
  Database,
  Code2,
  Layers,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '번개 빠른 성능',
    description:
      'Next.js 15의 App Router와 최적화된 번들링으로 최고의 성능을 제공합니다.',
    badge: 'Next.js 15',
  },
  {
    icon: Shield,
    title: '보안 기반',
    description:
      'React Hook Form과 Zod로 안전한 폼 검증을 제공하고, 인증 시스템이 포함되어 있습니다.',
    badge: 'Security',
  },
  {
    icon: Palette,
    title: '아름다운 UI',
    description:
      'TailwindCSS v4와 shadcn/ui로 만든 반응형의 우아한 사용자 인터페이스.',
    badge: 'UI/UX',
  },
  {
    icon: Database,
    title: '상태 관리',
    description:
      'Zustand v5로 간단하면서도 강력한 전역 상태 관리를 제공합니다.',
    badge: 'State',
  },
  {
    icon: Code2,
    title: '타입 안전성',
    description:
      'TypeScript를 기본으로 사용하여 런타임 오류를 줄이고 개발 경험을 향상시킵니다.',
    badge: 'TypeScript',
  },
  {
    icon: Layers,
    title: '다크 모드',
    description:
      'next-themes로 구현된 완벽한 다크 모드 지원으로 사용자 선호도를 반영합니다.',
    badge: 'Theme',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* 섹션 제목 */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            강력한 기능들
          </h2>
          <p className="text-lg text-muted-foreground">
            프로덕션 레벨의 웹 애플리케이션을 만들기 위한 모든 것이 준비되어 있습니다.
          </p>
        </div>

        {/* 기능 그리드 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-4">
                  {/* 아이콘과 배지 */}
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>

                  {/* 제목 */}
                  <h3 className="font-semibold text-lg">{feature.title}</h3>

                  {/* 설명 */}
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 배경 그래디언트 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
}
