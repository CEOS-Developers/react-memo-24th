import SearchBar from './SearchBar';

export default function Header(props) {
  return (
    <header className="flex flex-wrap items-center gap-3 sm:flex-nowrap sm:gap-6">
      <h1 className="sr-only">React Memo</h1>
      <SearchBar {...props} />
      <button disabled aria-label="새 메모" className="flex size-14 shrink-0 items-center justify-center rounded-full bg-surface sm:size-20"><img src="/assets/icons/plus.svg" alt="" width="28" height="28" /></button>
      <button disabled aria-label="사용자" className="flex size-14 shrink-0 items-center justify-center rounded-full bg-surface sm:size-20"><img src="/assets/icons/user.svg" alt="" width="32" height="32" /></button>
    </header>
  );
}
