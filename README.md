# React Memo

CEOS 24기 프론트엔드 2주차 과제로 제작한 React 기반 메모 서비스입니다.
컴포넌트 기반 개발 방식과 React Hooks를 활용한 상태 관리를 학습하는 것을 목표로 했습니다.

---

## 배포

- 배포 링크: https://react-memo-24th-theta.vercel.app/

---

## 기술 스택

- React
- JavaScript
- Vite
- Tailwind CSS
- ESLint
- Prettier

---

## 주요 기능

### 메모 조회

메모는 태그에 따라 서로 다른 색상으로 표시됩니다.
한 줄에 최대 4개의 메모가 표시되며, 카드 간 간격은 일정하게 유지됩니다.

---

### 태그 필터

네비게이션의 태그 선택 버튼을 통해 원하는 태그의 메모만 확인할 수 있습니다.
선택한 태그에 따라 메모 리스트가 실시간으로 필터링됩니다.

---

### 메모 검색

검색창을 통해 메모의 제목 또는 본문을 검색할 수 있습니다.
태그 필터와 검색 조건을 동시에 적용할 수 있습니다.

---

### 중요 메모

메모 카드의 별 버튼을 클릭하여 중요 메모 여부를 변경할 수 있습니다.
중요 메모는 일반 메모와 분리되어 상단에 표시됩니다.

---

### 메모 상세 조회

메모 카드를 클릭하면 상세 내용을 확인할 수 있는 모달이 나타납니다.
수정 및 삭제 버튼은 현재 안내 메시지가 표시되도록 구현했습니다.

---

### 상태 유지

브라우저의 `localStorage`를 사용하여 메모의 상태를 저장합니다.
따라서 새로고침하거나 브라우저를 다시 실행하더라도 중요 메모 상태가 유지됩니다.

---

### Empty State

상황에 따라 서로 다른 Empty UI를 표시합니다.

---

## 프로젝트 구조

src/
├── assets/
├── components/
│ ├── EmptyMemo.jsx
│ ├── EmptySearch.jsx
│ ├── Memo.jsx
│ ├── MemoList.jsx
│ ├── MemoModal.jsx
│ └── NavBar.jsx
│
├── constants/
│ └── tagColors.js
│
├── data/
│ └── MockDataMemo.js
│
├── pages/
│ └── Home.jsx
│
├── App.jsx
├── index.css
└── main.jsx
