# React Memo

메모를 작성하고 태그별로 관리할 수 있는 React 기반 메모 서비스입니다.

## 폴더 구조

```text
src
├─ api           # API 요청 함수
├─ assets         # 폰트, 아이콘 등 정적 파일
├─ components     # 공통 및 메모 관련 컴포넌트
├─ pages          # 페이지 컴포넌트
├─ routes         # 라우팅 설정
├─ store          # Zustand 전역 상태
├─ styles         # 폰트 및 디자인 토큰
└─ types          # TypeScript 타입 정의

## 주요 기능

- 회원가입 및 로그인 API 연동
- 로그인 토큰 및 이메일 전역 상태 관리
- 빈 메모 화면 구현
- 메모 작성 화면 구현
- Daily, Work, Others 태그 선택
- 태그별 메모 필터링
- 메모 제목 및 본문 검색
- 검색 결과 없음 화면 구현
- 메모 카드 상세 보기
- 별 버튼을 통한 메모 고정 및 상단 정렬
- 마이페이지 UI 및 닉네임 수정
- 네트워크 오류 모달 처리

## 기술 스택

- React
- TypeScript
- Vite
- React Router DOM
- Zustand
- Tailwind CSS

## 추후 구현 예정

- 메모 API 연동
  - 메모 목록 조회
  - 메모 작성
  - 메모 상세 조회
  - 메모 수정
  - 메모 삭제
  - 메모 고정 상태 서버 반영
- 메모 상세 보기의 수정 및 삭제 기능 연결
- 태그 관리 기능 구현
- 휴지통 및 메모 복구 기능 구현
- 반응형 UI 개선
```
