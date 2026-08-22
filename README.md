# 🚀 Nuxt 4 내·외부 API 모듈화 웹 서비스

소규모 팀의 빠른 개발 생산성과 강력한 보안을 위해 **BFF(Backend For Frontend) 아키텍처**로 설계된 풀스택 웹 애플리케이션 프레임워크입니다. 외부는 인증 API로, 내부는 대시보드 및 세션 관리 전용으로 폴더를 명확히 분리하여 관리합니다.

---

## 📌 권장 개발 환경 (Prerequisites)

프로젝트 구동을 위해 아래 버전을 반드시 준수해 주세요. 버전이 맞지 않으면 빌드 시 오류가 발생할 수 있습니다.

| 항목 | 권장 사양 | 확인 명령어 |
| :--- | :--- | :--- |
| **Node.js** | **v20.x 이상** (LTS 권장) | `node -v` |
| **NPM** | **v10.x 이상** | `npm -v` |

---

## 🛠️ 개발 시작하기 (Quick Start)

### 1. 저장소 클론 및 패키지 설치
GitHub에서 코드를 내려받은 후, 라이브러리를 설치합니다. (`node_modules`는 Git에서 제외되어 있으므로 최초 설치가 필수입니다.)
```bash
npm install
```

### 2. 환경 변수 세팅 (`.env`)
프로젝트 루트(최상위) 위치에 `.env` 파일을 생성하고 외부 백엔드 주소를 입력합니다.
```env
# .env
EXTERNAL_BACKEND_URL=https://your-backend.com
```

### 3. 로컬 개발 서버 실행
```bash
npm run dev
```
> 서버가 가동되면 브라우저에서 `http://localhost:3000`으로 접속합니다.

---

## 🚨 자주 발생하는 오류 및 해결 가이드 (Troubleshooting)

### 1. `npx` 설치 실패 또는 GitHub 다운로드 실패 (`fetch failed`)
`npx nuxi@latest init` 도중 네트워크 프록시나 방화벽 문제로 템플릿 다운로드가 막히는 경우입니다.
* **해결책**: `degit` 도구를 이용하여 GitHub 캐시를 우회해 강제로 다운로드합니다.
  ```bash
  npx degit nuxt/starter#v4 nuxt-app
  ```

### 2. `[NUXT_E4014] No pages found` 에러 발생
Nuxt 4 컴파일러가 페이지 컴포넌트를 인지하지 못할 때 발생합니다.
* **해결책**: Nuxt 4 폴더 규격에 맞게 `pages` 폴더가 최상위가 아닌 **`app/` 폴더 내부**에 위치해야 합니다.
  ```text
  └── app/
      ├── app.vue
      └── pages/
          ├── index.vue
          └── login.vue
  ```

### 3. 로그아웃 시 `404 Page not found` 에러 발생
새로운 API 파일을 생성했으나 Nuxt 내부 라우터 엔진이 실시간 캐시를 갱신하지 못해 주소를 찾지 못하는 현상입니다.
* **해결책**: 파일명이 `logout.post.ts`로 정확한지 확인 후, 가동 중인 터미널을 완전히 종료(`Ctrl + C`)하고 **서버를 다시 시작**해 주세요.
  ```bash
  npm run dev
  ```

---

## 📂 프로젝트 폴더 구조 명세 (Folder Structure)

```text
├── app/
│   ├── pages/
│   │   ├── index.vue           # 메인 대시보드 화면 (내부 API 호출)
│   │   └── login.vue           # 서비스 로그인 화면 (외부 API 호출)
│   └── app.vue                 # <NuxtPage /> 라우팅 엔트리
├── server/
│   ├── api/
│   │   ├── innerapi/           # [내부 전용] 대시보드 데이터 및 로그아웃(세션 파기)
│   │   └── outerapi/           # [외부 연동] 외부 백엔드 API 중계 및 CORS 우회
│   └── plugins/
│       └── logger.ts           # [글로벌 로깅] 모든 API 요청/응답/크래시 에러 모니터링
├── .env                        # 보안 및 환경변수 설정 파일 (Git 업로드 금지)
├── .gitignore                  # 무거운 파일 및 보안 파일 업로드 차단 설정
└── nuxt.config.ts              # 보안 HTTP 헤더 및 Nuxt 4 시스템 설정 파일
```

---

## 🛡️ 시스템 보안 및 모니터링 적용 사항

* **SQL/NoSQL Injection 방지**: `outerapi` 내부에서 정규식(`/['";-]/g`) 및 타입 캐스팅을 통해 악성 특수문자 선제 차단.
* **XSS 방지**: Vue.js 자동 이스케이프 렌더링 도입 및 `httpOnly: true` 쿠키 설정으로 브라우저 단 자바스크립트 토큰 탈취 원천 봉쇄.
* **CSRF 방지**: 인증 쿠키 속성에 `sameSite: 'strict'`를 명시하여 제3자 사이트의 요청 위조 방어.
* **보안 헤더**: `X-Frame-Options`, `X-Content-Type-Options`를 일괄 적용하여 웹 취약점 방어.
* **서버 로깅**: 모든 API 호출의 처리 시간(`ms`)과 500 서버 크래시 에러 발생 시의 `Stack Trace`를 터미널에 실시간 기록.

---

## 🚀 운영 서버 배포 (Production Deployment)

### 1. 배포 컴파일 빌드
```bash
npm run build
```
> 빌드가 완료되면 독립 실행이 가능한 최적화 묶음인 `.output/` 폴더가 생성됩니다.

### 2. PM2를 통한 무중단 배경 가동 (권장)
운영 Linux 서버에 `.output/` 폴더를 복사한 후 터미널이 닫혀도 안정적으로 운영되도록 프로세스를 백그라운드에 등록합니다.
```bash
# PM2로 서비스 가동
pm2 start .output/server/index.mjs --name "nuxt-production-app"

# 실시간 모니터링 로그 확인
pm2 logs nuxt-production-app
```
