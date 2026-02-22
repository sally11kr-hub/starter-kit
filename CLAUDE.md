# CLAUDE.md — Next.js 15 스타터킷

Claude Code가 이 프로젝트에서 작업할 때 반드시 참고해야 하는 가이드입니다.

## 프로젝트 개요

Next.js 15 + React 19 기반 풀스택 스타터킷. 인증, 대시보드, 다크모드를 포함한 프로덕션 수준의 기반 코드입니다.

## 기술 스택 (정확한 버전)

| 기술 | 버전 | 비고 |
|------|------|------|
| Next.js | ^16.1.6 | App Router |
| React | 19.1.0 | RSC 지원 |
| TypeScript | ^5 | strict 모드 |
| TailwindCSS | ^4.2.0 | CSS-first, OKLCH |
| Zustand | ^5.0.11 | persist 미들웨어 |
| React Hook Form | ^7.71.2 | |
| Zod | ^4.3.6 | |
| next-themes | ^0.4.6 | 다크모드 |
| shadcn/ui | New York 스타일 | |
| lucide-react | ^0.575.0 | 아이콘 |

## 개발 명령어

```bash
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

## 프로젝트 구조

```
claude-nextjs-starterkit/
├── app/                          # Next.js App Router
│   ├── (auth)/login/page.tsx     # 로그인 페이지
│   ├── (dashboard)/              # 인증 보호 라우트 그룹
│   │   ├── layout.tsx            # 인증 가드 + 사이드바/헤더
│   │   └── dashboard/page.tsx    # 대시보드 메인
│   ├── layout.tsx                # 루트 레이아웃 + ThemeProvider
│   ├── page.tsx                  # 랜딩 페이지
│   └── globals.css               # TailwindCSS v4 + CSS 변수
├── components/
│   ├── ui/                       # shadcn/ui 컴포넌트 (수정 금지)
│   ├── auth/login-form.tsx       # 로그인 폼 (RHF + Zod)
│   ├── layout/                   # 레이아웃 컴포넌트
│   │   ├── header.tsx            # 랜딩 헤더
│   │   ├── footer.tsx            # 푸터
│   │   ├── sidebar.tsx           # 대시보드 사이드바
│   │   └── dashboard-header.tsx  # 대시보드 헤더 (모바일 Sheet)
│   ├── landing/                  # 랜딩 페이지 섹션
│   │   ├── hero-section.tsx
│   │   └── features-section.tsx
│   ├── dashboard/                # 대시보드 위젯
│   │   ├── stats-card.tsx
│   │   └── recent-activity.tsx
│   └── theme-toggle.tsx          # 다크모드 토글
├── lib/
│   ├── utils.ts                  # cn() 유틸리티
│   └── validations/auth.ts       # Zod 스키마
├── stores/
│   ├── auth-store.ts             # 인증 상태 (persist)
│   └── ui-store.ts               # UI 상태 (사이드바)
├── providers/theme-provider.tsx  # next-themes 래퍼
└── types/index.ts                # 공통 TypeScript 타입
```

## 핵심 아키텍처 규칙

### 1. 인증 흐름
- **Zustand `auth-store`** → localStorage에 persist
- **`(dashboard)/layout.tsx`**: `useEffect` 내에서 hydration 후 인증 체크 → 미인증 시 `/login` 리다이렉트
- 실제 API 없음: 로그인 폼에서 1초 딜레이 후 목(mock) 인증 처리

### 2. Zustand v5 사용 패턴
```typescript
// ✅ 올바른 사용
import { useAuthStore } from '@/stores/auth-store'
const { user, setUser } = useAuthStore()

// ✅ shallow 비교 필요 시
import { useShallow } from 'zustand/react/shallow'
const { a, b } = useAuthStore(useShallow((state) => ({ a: state.a, b: state.b })))
```

### 3. TailwindCSS v4 규칙
- `tailwind.config.js` 없음 — CSS-first 접근방식
- 색상은 `globals.css`의 CSS 변수(`--background`, `--foreground` 등) 사용
- OKLCH 색상 시스템 (`oklch(...)` 형식)
- 클래스 조합 시 항상 `cn()` 유틸리티 사용

### 4. shadcn/ui 컴포넌트
- `components/ui/` 내 파일은 직접 수정 가능 (shadcn 철학: 소유권)
- 새 컴포넌트 추가: `npx shadcn@latest add [컴포넌트명]`
- 스타일: New York, 기본 색상: neutral

### 5. 폼 처리 패턴
```typescript
// lib/validations/auth.ts에 Zod 스키마 정의
// 컴포넌트에서 useForm<T> + zodResolver 사용
const form = useForm<LoginFormData>({
  resolver: zodResolver(loginSchema),
})
```

## 타입 규칙

- **`any` 타입 절대 금지** — 컴파일러 에러로 처리
- 공통 타입은 `types/index.ts`에 정의
- Zod 스키마 타입은 `z.infer<typeof schema>` 사용
- 컴포넌트 props는 반드시 TypeScript interface로 정의

## 클라이언트/서버 컴포넌트 구분

| 파일 | 타입 | 이유 |
|------|------|------|
| `providers/theme-provider.tsx` | 클라이언트 | next-themes hooks |
| `stores/*.ts` | 클라이언트 전용 | Zustand |
| `components/auth/login-form.tsx` | 클라이언트 | RHF, 상태 |
| `components/layout/dashboard-header.tsx` | 클라이언트 | Sheet, dropdown |
| `components/layout/sidebar.tsx` | 클라이언트 | usePathname |
| `app/(dashboard)/layout.tsx` | 클라이언트 | 인증 가드 |
| `app/page.tsx`, `app/layout.tsx` | 서버 | 기본 |

**규칙**: 상태, 이벤트 핸들러, 브라우저 API 필요 시 `'use client'` 추가.

## 새 기능 추가 가이드

### 새 대시보드 페이지
1. `app/(dashboard)/[페이지명]/page.tsx` 생성
2. `components/layout/sidebar.tsx`의 `navItems` 배열에 추가
3. 인증 가드는 `(dashboard)/layout.tsx`가 자동 처리

### 새 API 라우트
- `app/api/[라우트명]/route.ts` 생성
- `types/index.ts`에 요청/응답 타입 정의

### 새 Zustand 스토어
- `stores/[기능명]-store.ts` 생성
- 영속성 필요 시 persist 미들웨어 적용
- 스토어 이름을 localStorage 키로 지정

## 코딩 컨벤션

- **들여쓰기**: 2칸 공백
- **컴포넌트**: PascalCase
- **함수/변수**: camelCase
- **파일명**: kebab-case
- **주석/문서**: 한국어
- **import 순서**: React → Next.js → 외부 라이브러리 → 내부 (`@/`)

## 현재 미구현 (확장 준비됨)

- 실제 백엔드 API 연동
- 데이터베이스 (Prisma/Drizzle 등)
- 회원가입 페이지 (`/register`)
- `/dashboard/analytics`, `/dashboard/settings` 등 세부 페이지
- 미들웨어 기반 서버사이드 인증 가드
