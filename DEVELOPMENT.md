# React Memo 실행 안내

```bash
npm install
npm run dev
```

배포용 빌드: `npm run build`
기능 테스트: `npm test`

## 파일 역할

- `src/App.jsx`: 메모 목록, 검색어, 태그, 선택한 메모 상태 관리
- `src/components/Header.jsx`: 상단 영역
- `src/components/SearchBar.jsx`: 검색 입력과 태그 선택
- `src/components/MemoList.jsx`: 일반·고정 목록에 재사용하는 컴포넌트
- `src/components/MemoItem.jsx`: 메모 카드와 고정 버튼
- `src/components/MemoDetail.jsx`: 상세 창과 닫기
- `src/components/EmptyState.jsx`: 메모 없음·검색 결과 없음 안내
- `src/data/sampleMemos.js`: 1주차에서 가져온 예시 메모 12개
- `src/data/tags.js`: 태그 이름과 Tailwind 색상 클래스
- `src/index.css`: Tailwind 연결, 색상, 폰트, 기본 스타일

공통 상태는 App에서 관리하고 자식에게 props로 전달합니다. 자식은 전달받은 함수를 호출해 상태를 변경합니다. 검색 결과는 filter로 계산하며 별도 state에 중복 저장하지 않습니다.

상세 창의 useRef는 dialog 요소를 참조합니다. useEffect는 창을 열고 컴포넌트가 제거될 때 닫는 역할을 합니다. StrictMode에서도 정리 함수가 실행됩니다.

새 메모·사용자·수정·삭제 버튼은 1주차와 동일하게 비활성 상태입니다. 저장 기능은 없으므로 새로고침하면 예시 메모와 고정 상태가 초기화됩니다. 테스트는 jsdom으로 실행하며 실제 브라우저의 모달 포커스 동작이나 화면 배치를 보장하지는 않습니다.

## Vercel 설정

- Framework Preset: Vite
- Root Directory: ./
- Build Command: npm run build
- Output Directory: dist
- Production Branch: sumin0423

배포 및 PR 제출은 별도로 진행합니다.
