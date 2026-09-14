# React Memo

1주차에 Vanilla JavaScript로 만든 메모 앱을 React로 옮기는 프로젝트입니다.
(개발하면서 진행되는 구현에 맞춰 README를 업데이트하고 있습니다.)

[1주차 Vanilla Memo](https://github.com/j2nooh/vanilla-memo-24th)

[2주차 과제 안내](docs/assignment.md)

## 사용한 기술 스택

| 구분 | 기술 |
| --- | --- |
| UI 라이브러리 | React, React DOM |
| 언어 | TypeScript |
| 개발 서버 및 빌드 | Vite |
| 스타일 | Tailwind CSS |
| 코드 검사 | ESLint |
| 코드 포맷 | Prettier |

## 구현 기능

1주차 Memo 기능을 React로 전환하며, 상태 관리는 전역 상태관리 라이브러리 없이 React Hooks로 구현합니다.

- [x] 개발 환경 설정 (Vite, React, TypeScript, Tailwind CSS, ESLint, Prettier)
- [ ] Figma 기준 디자인 시스템 및 기본 레이아웃 구성
- [ ] 메모 목록 및 재사용 가능한 카드 컴포넌트 구현
- [ ] 메모 검색 및 태그 필터 구현
- [ ] 메모 고정 및 고정 목록 분리
- [ ] 메모 상세 조회 및 모달 구현
- [ ] 메모 작성 및 수정 기능 구현
- [ ] 작성 취소 확인 및 완료 안내 구현
- [ ] 메모 삭제 및 삭제 확인 구현
- [ ] localStorage를 통한 메모 저장 및 복원
- [ ] 반응형 레이아웃 및 인터랙션 스타일 보완
- [ ] 추가 기능 및 디자인 구현 (선택)

## 파일 구조

레포 루트 기준의 주요 파일입니다.

```text
react-memo-24th/
├── docs/
│   └── assignment.md    # 2주차 과제 안내
├── public/              # 경로로 직접 제공하는 정적 파일
├── src/
│   ├── assets/          # 코드에서 불러오는 이미지 등 정적 파일
│   ├── App.tsx          # 앱 화면 구성
│   ├── App.css          # 앱 스타일
│   ├── index.css        # Tailwind CSS 연결 및 전역 스타일
│   └── main.tsx         # React 앱 진입점
├── index.html           # React 앱을 표시할 HTML 문서
├── package.json         # 의존성 및 실행 명령
├── vite.config.ts       # Vite 및 플러그인 설정
└── eslint.config.js     # 코드 검사 규칙
```

## 실행 방법

레포 루트에서 실행합니다.

```bash
npm ci
npm run dev
```

실행 후 터미널에 표시된 로컬 주소로 접속합니다.

| 명령 | 용도 |
| --- | --- |
| `npm run build` | 타입 검사 및 배포용 빌드 |
| `npm run lint` | 코드 규칙 검사 |
| `npm run format` | 코드 포맷 적용 |
| `npm run format:check` | 코드 포맷 검사 |
