function EmptyState({ onOpenEditor }) {
  return (
    <section className="flex min-h-[710px] flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-[#9dbfff] bg-[#e6efff]">
      <button
        type="button"
        onClick={onOpenEditor}
        aria-label="새 메모 작성"
        className="relative flex size-[120px] items-center justify-center rounded-full bg-blue-02"
      >
        <span className="absolute h-[5px] w-[32.73px] rounded-full bg-blue-01" />
        <span className="absolute h-[32.73px] w-[5px] rounded-full bg-blue-01" />
      </button>

      <p className="mt-7 text-[18px] font-medium leading-7 text-[#9dbfff]">
        새로운 메모를 작성해보세요!
      </p>
    </section>
  );
}

export default EmptyState;
