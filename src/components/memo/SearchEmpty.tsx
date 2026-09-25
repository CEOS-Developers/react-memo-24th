import searchEmptyIcon from "../../assets/icons/icon-search-empty.svg";

function SearchEmpty() {
  return (
    <section className="mt-14 flex min-h-[540px] flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-blue-07">
      <img
        src={searchEmptyIcon}
        alt=""
        aria-hidden="true"
        className="h-24 w-24"
      />

      <p className="mt-5 text-body-medium font-semibold text-blue-07">
        검색 결과가 없습니다
      </p>

      <p className="mt-2 text-body-small text-gray-03">
        다른 검색어로 다시 시도해보세요
      </p>
    </section>
  );
}

export default SearchEmpty;
