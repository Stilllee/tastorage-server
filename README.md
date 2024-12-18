# TASTORAGE API Server

레시피를 저장하고 관리할 수 있는 TASTORAGE의 API 서버입니다.

## 기술 스택

- NestJS
- Prisma
- Supabase (PostgreSQL)
- Swagger

<br />

## 주요 기능

- 레시피 CRUD
- 레시피 검색 (제목, 재료)
- 관리자 인증 (JWT)

<br />

## 브랜치 전략

- `main`: 배포용 브랜치
- `dev`: 개발용 브랜치

<br />

## 시작 가이드

### 설치

```bash
npm install
```

### 환경변수 설정

```env
DATABASE_URL="Supabase 프로젝트의 연결 URL"
```

### 실행

```bash
# 개발 환경
npm run start:dev

# 프로덕션 환경
npm run build
npm rnu start:prod
```

### API 문서

로컬 환경에서 Swagger UI를 통해 API 문서를 확인할 수 있습니다.

- 접속 URL: http://localhost:12345/api

<br />

## 주요 API

### 레시피

- `GET /recipe`: 레시피 목록 조회
- `GET /recipe/:id`: 특정 레시피 조회
- `POST /recipe`: 레시피 생성
- `PATCH /recipe/:id`: 레시피 수정
- `DELETE /recipe/:id`: 레시피 삭제
- `GET /recipe/search?q={검색어}`: 레시피 검색

### 인증

- `POST /auth/login`: 관리자 로그인
  - JWT 토큰을 쿠키로 관리
  - 관리자 인증이 필요한 API는 쿠키의 JWT 토큰 검증 후 접근 가능

<br />

## 프로젝트 구조

```bash
├── src/                      # 소스 코드
│   ├── main.ts              # 애플리케이션 시작점
│   ├── app.module.ts        # 루트 모듈
│   ├── auth/                # 인증 관련
│   │   ├── admin.guard.ts   # 관리자 권한 가드
│   │   ├── jwt.strategy.ts  # JWT 전략
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.ts
│   ├── recipe/             # 레시피 관련
│   │   ├── dto/           # Data Transfer Objects
│   │   ├── entity/
│   │   │   └── recipe.entity.ts
│   │   ├── recipe.controller.ts
│   │   ├── recipe.module.ts
│   │   └── recipe.service.ts
│   ├── prisma/            # Prisma 관련
│   └── util/             # 유틸리티
├── prisma/
│   └── schema.prisma     # Prisma 스키마
└── vercel.json          # Vercel 배포 설정
```
