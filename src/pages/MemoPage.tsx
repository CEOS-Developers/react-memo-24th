import MemoToolbar from '../components/memo/MemoToolbar';

function MemoPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col gap-[52px] px-[clamp(32px,calc((100vw_-_1200px)/2),120px)] pt-[72px] pb-14 max-[900px]:px-8 max-[900px]:pt-12 max-sm:gap-8 max-sm:px-4 max-sm:pt-6 max-sm:pb-8">
      <MemoToolbar />
      <section aria-labelledby="memo-list-title" className="flex w-full flex-1 flex-col gap-5">
        <h2 id="memo-list-title" className="sr-only">
          메모 목록
        </h2>
      </section>
    </main>
  );
}

export default MemoPage;
