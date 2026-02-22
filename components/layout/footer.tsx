import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 브랜드 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary to-primary/50" />
              <span className="font-bold">StarterKit</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Next.js 15 기반의 현대적인 웹 애플리케이션 스타터킷
            </p>
          </div>

          {/* 제품 */}
          <div className="space-y-3">
            <h4 className="font-semibold">제품</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  기능
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  가격
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  보안
                </Link>
              </li>
            </ul>
          </div>

          {/* 회사 */}
          <div className="space-y-3">
            <h4 className="font-semibold">회사</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  소개
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  블로그
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  채용
                </Link>
              </li>
            </ul>
          </div>

          {/* 법률 */}
          <div className="space-y-3">
            <h4 className="font-semibold">법률</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* 저작권 */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>© 2025 StarterKit. 모든 권리가 보호됩니다.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="hover:text-foreground">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
