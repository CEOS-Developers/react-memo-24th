function NoResultState() {
  return (
    <section className="flex min-h-[710px] flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-blue-07 bg-blue-01">
      <div className="flex size-[96px] items-center justify-center rounded-full bg-blue-07">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="14"
            cy="14"
            r="8"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-white-00"
          />
          <path
            d="M20 20L27 27"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-white-00"
          />
        </svg>
      </div>

      <h2 className="mt-[18px] text-center text-body-small font-regular text-blue-07">
        검색 결과가 없습니다
      </h2>

      <p className="mt-2 text-center text-body-small font-regular text-gray-03">
        다른 검색어로 다시 시도해보세요
      </p>
    </section>
  );
}

export default NoResultState;
