import { useState } from "react";
import dropdownArrowIcon from "../../assets/icons/icon-dropdown-arrow.svg";
import dailyDotIcon from "../../assets/icons/dot-daily.svg";
import othersDotIcon from "../../assets/icons/dot-others.svg";
import workDotIcon from "../../assets/icons/dot-work.svg";

export type MemoTag = "daily" | "work" | "others";
export type MemoFilter = "all" | MemoTag;

type TagSelectProps = {
  value: MemoFilter | null;
  onChange: (tag: MemoFilter) => void;
  showAll?: boolean;
};

const tagOptions: Array<{
  value: MemoFilter;
  label: string;
  icon?: string;
}> = [
  { value: "all", label: "All" },
  { value: "daily", label: "Daily", icon: dailyDotIcon },
  { value: "work", label: "Work", icon: workDotIcon },
  { value: "others", label: "Others", icon: othersDotIcon },
];

function TagSelect({ value, onChange, showAll = true }: TagSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const availableOptions = showAll
    ? tagOptions
    : tagOptions.filter((option) => option.value !== "all");

  const selectedOption = tagOptions.find((option) => option.value === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        className="flex cursor-pointer items-center gap-1 rounded-full bg-blue-01 px-3 py-2 text-body-small font-bold text-blue-05"
      >
        {selectedOption?.icon && (
          <img
            src={selectedOption.icon}
            alt=""
            aria-hidden="true"
            className="h-4 w-4"
          />
        )}

        {selectedOption?.label ?? "태그 선택"}

        <img
          src={dropdownArrowIcon}
          alt=""
          aria-hidden="true"
          className={`h-3 w-3 transition-transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-10 mt-2 flex min-w-[120px] flex-col gap-1 rounded-xl bg-white p-2 shadow-lg">
          {availableOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-left text-body-small font-bold text-blue-05 hover:bg-blue-01"
            >
              {option.icon && (
                <img
                  src={option.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              )}

              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default TagSelect;
