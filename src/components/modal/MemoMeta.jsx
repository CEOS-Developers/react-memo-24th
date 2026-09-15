import TagChip from "../common/TagChip";

export default function MemoMeta({ tag, date }) {
  return (
    <div className="flex items-center gap-6">
      <TagChip tag={tag} />
      <span className="h-13 w-[3px] rounded-sm bg-white-00" />
      <span className="text-heading-sm">{date}</span>
    </div>
  );
}
