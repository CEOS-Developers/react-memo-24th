import plusIcon from "../../assets/icons/plus.svg";

function EmptyState({ onOpenEditor }) {
  return (
    <section className="flex min-h-[710px] flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-[#9dbfff] bg-[#e6efff]">
      <button
        type="button"
        onClick={onOpenEditor}
        aria-label="새 메모 작성"
        className="flex size-[86px] items-center justify-center rounded-full bg-[#9dbfff]"
      >
        <img src={plusIcon} alt="" aria-hidden="true" />
      </button>

      <p className="mt-7 text-[18px] font-medium leading-7 text-[#9dbfff]">
        새로운 메모를 작성해보세요!
      </p>
    </section>
  );
}

export default EmptyState;
